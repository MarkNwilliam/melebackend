const { v4: uuidv4 } = require('uuid');
const getPharmacyProductModel = require('../utils/getPharmacyProductModel');
const getCategoryModel = require('../models/product_category');
const getManufacturerModel = require('../models/manufacturer_information');
const getUnitModel = require('../models/unit');

// Add a product to a pharmacy's collection
exports.addProduct = async (req, res) => {
    try {
        const { pharmacy_id } = req.params;
        const productData = req.body;

        // Check if category_id or category_name is provided
        const { category_id, category_name, manufacturer_id, manufacturer_name, unit, ...restProductData } = productData;

        let category;
        let manufacturer;
        let unitDoc;

        // Get the pharmacy-specific category model
        const Category = getCategoryModel(pharmacy_id);

        // If category_id is provided, use it
        if (category_id) {
            category = await Category.findById(category_id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found for this pharmacy' });
            }
        }
        // If category_name is provided, resolve it
        else if (category_name) {
            // Check if the category exists (case-insensitive)
            category = await Category.findOne({
                category_name: { $regex: new RegExp(`^${category_name}$`, 'i') },
            });

            // If the category doesn't exist, create it
            if (!category) {
                category = new Category({
                    category_name,
                    status: 1, // Default status
                });
                await category.save();
            }
        }
        // If neither is provided, return an error
        else {
            return res.status(400).json({ message: 'Missing category_id or category_name' });
        }

        // Get the pharmacy-specific manufacturer model
        const Manufacturer = getManufacturerModel(pharmacy_id);

        // If manufacturer_id is provided, use it
        if (manufacturer_id) {
            manufacturer = await Manufacturer.findById(manufacturer_id);
            if (!manufacturer) {
                return res.status(404).json({ message: 'Manufacturer not found for this pharmacy' });
            }
        }
        // If manufacturer_name is provided, resolve it
        else if (manufacturer_name) {
            // Check if the manufacturer exists (case-insensitive)
            manufacturer = await Manufacturer.findOne({
                manufacturer_name: { $regex: new RegExp(`^${manufacturer_name}$`, 'i') },
            });

            // If the manufacturer doesn't exist, create it
            if (!manufacturer) {
                manufacturer = new Manufacturer({
                    manufacturer_name,
                    address: 'N/A', // Default address
                    mobile: 'N/A', // Default mobile
                    details: 'N/A', // Default details
                    status: 1, // Default status
                });
                await manufacturer.save();
            }
        }
        // If neither is provided, return an error
        else {
            return res.status(400).json({ message: 'Missing manufacturer_id or manufacturer_name' });
        }

        // Get the pharmacy-specific unit model
        const Unit = getUnitModel(pharmacy_id);

        // If unit is provided, resolve it
        if (unit) {
            // Check if the unit exists (case-insensitive)
            unitDoc = await Unit.findOne({
                unit_name: { $regex: new RegExp(`^${unit}$`, 'i') },
            });

            // If the unit doesn't exist, create it
            if (!unitDoc) {
                unitDoc = new Unit({
                    unit_name: unit,
                    status: true, // Default status
                });
                await unitDoc.save();
            }
        }
        // If neither is provided, return an error
        else {
            return res.status(400).json({ message: 'Missing unit' });
        }

        // Add the category_id, manufacturer_id, and unit_id to the product data
        restProductData.category_id = category._id;
        restProductData.manufacturer_id = manufacturer._id;
        restProductData.unit = unitDoc._id;

        // Generate a unique product_id if not provided
        if (!restProductData.product_id) {
            restProductData.product_id = uuidv4();
        }

        // Get the pharmacy's product model
        const PharmacyProduct = getPharmacyProductModel(pharmacy_id);

        // Add the product
        const product = new PharmacyProduct(restProductData);
        await product.save();

        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
};

// Upload products from CSV to a pharmacy's collection
exports.uploadProducts = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body
        const { pharmacy_id } = req.params; // Firebase ID from request parameters
        const { products } = req.body; // Extract products array from the request body

        // Validate that products is an array
        if (!Array.isArray(products)) {
            return res.status(400).json({ message: 'Invalid payload: products must be an array' });
        }

        const results = [];

        console.log('Pharmacy ID:', pharmacy_id); // Log the pharmacy ID
        console.log('Products:', products); // Log the products array

        // Get the pharmacy's product model
        const PharmacyProduct = getPharmacyProductModel(pharmacy_id);

        for (const product of products) {
            console.log('Processing Product:', product); // Log each product
            const { category_id, category_name, manufacturer_id, manufacturer_name, unit, ...restProductData } = product;

            // Override pharmacy_id with the one from request parameters
            restProductData.pharmacy_id = pharmacy_id;

            // Validate required fields
            const requiredFields = ['product_name', 'price'];
            for (const field of requiredFields) {
                if (!restProductData[field]) {
                    console.log('Missing Required Field:', field); // Log missing field
                    results.push({ error: `Missing required field: ${field}` });
                    continue; // Skip this product
                }
            }

            let category;
            let manufacturer;
            let unitDoc;

            // Get the pharmacy-specific category model
            const Category = getCategoryModel(pharmacy_id);

            // If category_id is provided, use it
            if (category_id) {
                console.log('Category ID Provided:', category_id); // Log category ID
                category = await Category.findById(category_id);
                if (!category) {
                    console.log('Category Not Found for ID:', category_id); // Log error
                    results.push({ error: `Category not found for ID: ${category_id}` });
                    continue; // Skip this product
                }
            }
            // If category_name is provided, resolve it
            else if (category_name) {
                console.log('Category Name Provided:', category_name); // Log category name
                // Check if the category exists (case-insensitive)
                category = await Category.findOne({
                    category_name: { $regex: new RegExp(`^${category_name}$`, 'i') },
                });

                // If the category doesn't exist, create it
                if (!category) {
                    console.log('Creating New Category:', category_name); // Log new category
                    category = new Category({
                        category_name,
                        status: 1, // Default status
                    });
                    await category.save();
                }
            }
            // If neither is provided, return an error
            else {
                console.log('Missing Category ID or Name'); // Log missing category
                results.push({ error: 'Missing category_id or category_name' });
                continue; // Skip this product
            }

            // Get the pharmacy-specific manufacturer model
            const Manufacturer = getManufacturerModel(pharmacy_id);

            // If manufacturer_id is provided, use it
            if (manufacturer_id) {
                console.log('Manufacturer ID Provided:', manufacturer_id); // Log manufacturer ID
                manufacturer = await Manufacturer.findById(manufacturer_id);
                if (!manufacturer) {
                    console.log('Manufacturer Not Found for ID:', manufacturer_id); // Log error
                    results.push({ error: `Manufacturer not found for ID: ${manufacturer_id}` });
                    continue; // Skip this product
                }
            }
            // If manufacturer_name is provided, resolve it
            else if (manufacturer_name) {
                console.log('Manufacturer Name Provided:', manufacturer_name); // Log manufacturer name
                // Check if the manufacturer exists (case-insensitive)
                manufacturer = await Manufacturer.findOne({
                    manufacturer_name: { $regex: new RegExp(`^${manufacturer_name}$`, 'i') },
                });

                // If the manufacturer doesn't exist, create it
                if (!manufacturer) {
                    console.log('Creating New Manufacturer:', manufacturer_name); // Log new manufacturer
                    manufacturer = new Manufacturer({
                        manufacturer_name,
                        address: 'N/A', // Default address
                        mobile: 'N/A', // Default mobile
                        details: 'N/A', // Default details
                        status: 1, // Default status
                    });
                    await manufacturer.save();
                }
            }
            // If neither is provided, return an error
            else {
                console.log('Missing Manufacturer ID or Name'); // Log missing manufacturer
                results.push({ error: 'Missing manufacturer_id or manufacturer_name' });
                continue; // Skip this product
            }

            // Get the pharmacy-specific unit model
            const Unit = getUnitModel(pharmacy_id);

            // If unit is provided, resolve it
            if (unit) {
                console.log('Unit Provided:', unit); // Log unit
                // Check if the unit exists (case-insensitive)
                unitDoc = await Unit.findOne({
                    unit_name: { $regex: new RegExp(`^${unit}$`, 'i') },
                });

                // If the unit doesn't exist, create it
                if (!unitDoc) {
                    console.log('Creating New Unit:', unit); // Log new unit
                    unitDoc = new Unit({
                        unit_name: unit,
                        status: true, // Default status
                    });
                    await unitDoc.save();
                }
            }
            // If neither is provided, return an error
            else {
                console.log('Missing Unit'); // Log missing unit
                results.push({ error: 'Missing unit' });
                continue; // Skip this product
            }

            // Add the category_id, manufacturer_id, and unit_id to the product data
            restProductData.category_id = category._id;
            restProductData.manufacturer_id = manufacturer._id;
            restProductData.unit = unitDoc._id;

            // Generate a unique product_id if not provided
            if (!restProductData.product_id) {
                restProductData.product_id = uuidv4();
            }

            // Save the product
            const newProduct = new PharmacyProduct(restProductData);
            await newProduct.save();
            results.push(newProduct);
        }

        res.status(201).json({ message: 'Products uploaded successfully', results });
    } catch (error) {
        console.error('Error in uploadProducts:', error); // Log the error
        res.status(500).json({ message: 'Error uploading products', error });
    }
};

// Fetch products for a specific pharmacy
exports.getAllProducts = async (req, res) => {
    try {
        const { pharmacy_id } = req.params;

        // Get the pharmacy's product model
        const PharmacyProduct = getPharmacyProductModel(pharmacy_id);

        // Fetch products and populate category and manufacturer details
        const products = await PharmacyProduct.find()
            .populate('category_id', 'category_name status')
            .populate('manufacturer_id', 'manufacturer_name status');

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Update a product in a pharmacy's collection
exports.updateProduct = async (req, res) => {
    try {
        const { pharmacy_id, productId } = req.params;

        // Get the pharmacy's product model
        const PharmacyProduct = getPharmacyProductModel(pharmacy_id);

        // Update the product using product_id
        const updatedProduct = await PharmacyProduct.findOneAndUpdate(
            { product_id: productId },
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// Delete a product from a pharmacy's collection
exports.deleteProduct = async (req, res) => {
    try {
        const { pharmacy_id, productId } = req.params;

        // Get the pharmacy's product model
        const PharmacyProduct = getPharmacyProductModel(pharmacy_id);

        // Delete the product using product_id
        const deletedProduct = await PharmacyProduct.findOneAndDelete({ product_id: productId });

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error deleting product', error });
    }
};

// Get Stock Report (Batch Wise)
exports.getStockReportBatchWise = async (req, res) => {
    try {
      const { pharmacy_id } = req.params;
  
      // Get the pharmacy-specific product model
      const Product = mongoose.models[`pharmacy_${pharmacy_id}_products`] ||
        mongoose.model(`pharmacy_${pharmacy_id}_products`, productInformationSchema);
  
      // Fetch all products for the pharmacy
      const products = await Product.find({ pharmacy_id })
        .populate("category_id", "category_name")
        .populate("manufacturer_id", "manufacturer_name");
  
      // Group products by batch
      const batchWiseStock = products.reduce((acc, product) => {
        const batchKey = product.batch_number || "default_batch"; // Use batch_number if available
        if (!acc[batchKey]) {
          acc[batchKey] = {
            batch_number: batchKey,
            expiry_date: product.expiry_date
              ? new Date(product.expiry_date).toLocaleDateString()
              : "N/A",
            products: [],
            total_stock: 0,
          };
        }
        acc[batchKey].products.push({
          product_id: product.product_id,
          product_name: product.product_name,
          category: product.category_id?.category_name || "N/A",
          manufacturer: product.manufacturer_id?.manufacturer_name || "N/A",
          price: product.price,
          stock_quantity: calculateStock(product),
        });
        acc[batchKey].total_stock += calculateStock(product);
        return acc;
      }, {});
  
      // Convert the grouped data into an array
      const batchWiseStockReport = Object.values(batchWiseStock);
  
      res.status(200).json({ success: true, data: batchWiseStockReport });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching batch-wise stock report", error });
    }
  };