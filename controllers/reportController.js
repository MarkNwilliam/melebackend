const mongoose = require("mongoose");
const getManufacturerModel = require("../models/manufacturer_information"); // Import manufacturer model
const productInformationSchema = require("../models/product_information"); // Import product schema

// Helper function to calculate stock quantity
const calculateStock = (product) => {
  return product.number_of_units || 0;
};

// Get Stock Report
exports.getStockReport = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;

    // Get the pharmacy-specific product model
    const Product = mongoose.models[`pharmacy_${pharmacy_id}_products`] ||
      mongoose.model(`pharmacy_${pharmacy_id}_products`, productInformationSchema);

    // Fetch all products for the pharmacy
    const products = await Product.find({ pharmacy_id })
      .populate("category_id", "category_name")
      .populate("manufacturer_id", "manufacturer_name");

    // Format the data for the report
    const stockReport = products.map((product) => ({
      product_id: product.product_id,
      product_name: product.product_name,
      category: product.category_id?.category_name || "N/A",
      manufacturer: product.manufacturer_id?.manufacturer_name || "N/A",
      price: product.price,
      stock_quantity: calculateStock(product),
      expiry_date: product.expiry_date
        ? new Date(product.expiry_date).toLocaleDateString()
        : "N/A",
    }));

    res.status(200).json({ success: true, data: stockReport });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching stock report", error });
  }
};

// Get Out-of-Stock Report
exports.getOutOfStockReport = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;

    // Get the pharmacy-specific product model
    const Product = mongoose.models[`pharmacy_${pharmacy_id}_products`] ||
      mongoose.model(`pharmacy_${pharmacy_id}_products`, productInformationSchema);

    // Fetch products with zero or negative stock
    const products = await Product.find({
      pharmacy_id,
      number_of_units: { $lte: 0 }, // Products with zero or negative stock
    })
      .populate("category_id", "category_name")
      .populate("manufacturer_id", "manufacturer_name");

    // Format the data for the report
    const outOfStockReport = products.map((product) => ({
      product_id: product.product_id,
      product_name: product.product_name,
      category: product.category_id?.category_name || "N/A",
      manufacturer: product.manufacturer_id?.manufacturer_name || "N/A",
      stock_quantity: calculateStock(product),
    }));

    res.status(200).json({ success: true, data: outOfStockReport });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching out-of-stock report", error });
  }
};

// Get Expiry Date Report
exports.getExpiryDateReport = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;
    const { days = 30 } = req.query; // Default to 30 days

    // Get the pharmacy-specific product model
    const Product = mongoose.models[`pharmacy_${pharmacy_id}_products`] ||
      mongoose.model(`pharmacy_${pharmacy_id}_products`, productInformationSchema);

    // Calculate the expiry date threshold
    const expiryThreshold = new Date();
    expiryThreshold.setDate(expiryThreshold.getDate() + parseInt(days));

    // Fetch products nearing expiry
    const products = await Product.find({
      pharmacy_id,
      expiry_date: { $lte: expiryThreshold }, // Products expiring within the specified days
    })
      .populate("category_id", "category_name")
      .populate("manufacturer_id", "manufacturer_name");

    // Format the data for the report
    const expiryDateReport = products.map((product) => ({
      product_id: product.product_id,
      product_name: product.product_name,
      category: product.category_id?.category_name || "N/A",
      manufacturer: product.manufacturer_id?.manufacturer_name || "N/A",
      expiry_date: product.expiry_date
        ? new Date(product.expiry_date).toLocaleDateString()
        : "N/A",
      stock_quantity: calculateStock(product),
    }));

    res.status(200).json({ success: true, data: expiryDateReport });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching expiry date report", error });
  }
};

// Get Sales Report (Date-wise)
exports.getSalesReport = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;
    const { start_date, end_date } = req.query;

    // Get the pharmacy-specific product model
    const Product = mongoose.models[`pharmacy_${pharmacy_id}_products`] ||
      mongoose.model(`pharmacy_${pharmacy_id}_products`, productInformationSchema);

    // Fetch sales data within the specified date range
    const sales = await Product.find({
      pharmacy_id,
      sale_date: { $gte: new Date(start_date), $lte: new Date(end_date) },
    }).populate("product_id", "product_name");

    // Calculate total sales
    const totalSales = sales.reduce((sum, sale) => sum + sale.total_amount, 0);

    // Format the data for the report
    const salesReport = {
      total_sales: totalSales,
      sales: sales.map((sale) => ({
        sale_id: sale.sale_id,
        product_name: sale.product_id?.product_name || "N/A",
        quantity: sale.quantity,
        total_amount: sale.total_amount,
        sale_date: new Date(sale.sale_date).toLocaleDateString(),
      })),
    };

    res.status(200).json({ success: true, data: salesReport });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching sales report", error });
  }
};

// Get Profit Report (Manufacturer-wise)
exports.getProfitReportManufacturer = async (req, res) => {
  try {
    const { pharmacy_id } = req.params;
    const { manufacturer_id, start_date, end_date } = req.query;

    // Get the pharmacy-specific manufacturer model
    const Manufacturer = getManufacturerModel(pharmacy_id);

    // Get the pharmacy-specific product model
    const Product = mongoose.models[`pharmacy_${pharmacy_id}_products`] ||
      mongoose.model(`pharmacy_${pharmacy_id}_products`, productInformationSchema);

    // Fetch purchase and sales data for the specified manufacturer and date range
    const purchases = await Product.find({
      pharmacy_id,
      manufacturer_id,
      purchase_date: { $gte: new Date(start_date), $lte: new Date(end_date) },
    });
    const sales = await Product.find({
      pharmacy_id,
      manufacturer_id,
      sale_date: { $gte: new Date(start_date), $lte: new Date(end_date) },
    });

    // Calculate total purchase and sales amounts
    const totalPurchaseAmount = purchases.reduce((sum, purchase) => sum + purchase.total_amount, 0);
    const totalSalesAmount = sales.reduce((sum, sale) => sum + sale.total_amount, 0);

    // Calculate profit
    const profit = totalSalesAmount - totalPurchaseAmount;

    // Format the data for the report
    const profitReport = {
      manufacturer_id,
      total_purchase_amount: totalPurchaseAmount,
      total_sales_amount: totalSalesAmount,
      profit,
      purchases: purchases.map((purchase) => ({
        purchase_id: purchase.purchase_id,
        product_name: purchase.product_id?.product_name || "N/A",
        quantity: purchase.quantity,
        total_amount: purchase.total_amount,
        purchase_date: new Date(purchase.purchase_date).toLocaleDateString(),
      })),
      sales: sales.map((sale) => ({
        sale_id: sale.sale_id,
        product_name: sale.product_id?.product_name || "N/A",
        quantity: sale.quantity,
        total_amount: sale.total_amount,
        sale_date: new Date(sale.sale_date).toLocaleDateString(),
      })),
    };

    res.status(200).json({ success: true, data: profitReport });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching profit report", error });
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