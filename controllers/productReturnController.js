const getProductReturnModel = require('../models/product_return.js');
const getManufacturerModel = require('../models/manufacturer_information');

// Add a new product return (pharmacy-specific)
exports.addProductReturn = async (req, res) => {
  try {
    const { pharmacyId } = req.params;
    const ProductReturn = getProductReturnModel(pharmacyId); // Dynamic model

    const productReturn = new ProductReturn(req.body);
    await productReturn.save();

    res.status(201).json({ 
      success: true,
      message: 'Product return added successfully', 
      data: productReturn 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error adding product return', 
      error: error.message 
    });
  }
};

// Get all product returns (pharmacy-specific, with pagination)
exports.getAllProductReturns = async (req, res) => {
  try {
    const { pharmacyId } = req.params;
    const { page = 1, perPage = 10, type } = req.query;
    const ProductReturn = getProductReturnModel(pharmacyId);

    // Filter by return type if provided (e.g., 'STOCK', 'WASTAGE', 'MANUFACTURER')
    const query = type ? { return_type: type.toUpperCase() } : {};

    const productReturns = await ProductReturn.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

    const total = await ProductReturn.countDocuments(query);

    res.json({
      success: true,
      data: productReturns,
      pagination: { page, perPage, total }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching product returns', 
      error: error.message 
    });
  }
};

// Get manufacturer returns (usablity=2, joined with manufacturer data)
exports.getManufacturerReturns = async (req, res) => {
  try {
    const { pharmacyId } = req.params;
    const { page = 1, perPage = 10 } = req.query;

    const ProductReturn = getProductReturnModel(pharmacyId);
    const Manufacturer = getManufacturerModel(pharmacyId);

    const returns = await ProductReturn.aggregate([
      { $match: { usablity: 2 } }, // Filter for manufacturer returns
      { $skip: (page - 1) * perPage },
      { $limit: perPage },
      {
        $lookup: {
          from: Manufacturer.collection.name,
          localField: 'manufacturer_id',
          foreignField: 'manufacturer_id',
          as: 'manufacturer'
        }
      },
      { $unwind: '$manufacturer' },
      {
        $project: {
          return_id: 1,
          date_return: 1,
          net_total_amount: 1,
          manufacturer_name: '$manufacturer.manufacturer_name',
          // Include other fields as needed
        }
      }
    ]);

    const total = await ProductReturn.countDocuments({ usablity: 2 });

    res.json({
      success: true,
      data: returns,
      pagination: { page, perPage, total }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching manufacturer returns', 
      error: error.message 
    });
  }
};

// Get a single product return by ID (pharmacy-specific)
exports.getProductReturnById = async (req, res) => {
  try {
    const { pharmacyId, returnId } = req.params;
    const ProductReturn = getProductReturnModel(pharmacyId);

    const productReturn = await ProductReturn.findOne({ return_id: returnId });
    if (!productReturn) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product return not found' 
      });
    }

    res.json({ 
      success: true, 
      data: productReturn 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching product return', 
      error: error.message 
    });
  }
};

// Update a product return (pharmacy-specific)
exports.updateProductReturn = async (req, res) => {
  try {
    const { pharmacyId, returnId } = req.params;
    const ProductReturn = getProductReturnModel(pharmacyId);

    const updatedProductReturn = await ProductReturn.findOneAndUpdate(
      { return_id: returnId },
      req.body,
      { new: true }
    );

    if (!updatedProductReturn) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product return not found' 
      });
    }

    res.json({ 
      success: true,
      message: 'Product return updated successfully', 
      data: updatedProductReturn 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error updating product return', 
      error: error.message 
    });
  }
};

// Delete a product return (pharmacy-specific)
exports.deleteProductReturn = async (req, res) => {
    const { pharmacyId, returnId } = req.params;
    const ProductReturn = getProductReturnModel(pharmacyId);
  
    console.log(`[DELETE] Attempting to delete return - Pharmacy: ${pharmacyId}, ReturnID: ${returnId}`);
  
    try {
      const deletedReturn = await ProductReturn.findOneAndDelete({ return_id: returnId });
      
      if (!deletedReturn) {
        console.error(`[DELETE FAILED] Return not found - ReturnID: ${returnId}`);
        return res.status(404).json({ 
          success: false, 
          message: 'Product return not found',
          details: {
            attemptedId: returnId,
            idType: 'return_id'
          }
        });
      }
  
      console.log(`[DELETE SUCCESS] Deleted return - ID: ${deletedReturn._id}, ReturnID: ${deletedReturn.return_id}`);
      return res.json({ 
        success: true,
        message: 'Product return deleted successfully',
        deletedId: deletedReturn._id
      });
  
    } catch (error) {
      console.error('[DELETE ERROR]', {
        error: error.message,
        stack: error.stack,
        params: req.params,
        timestamp: new Date().toISOString()
      });
      
      return res.status(500).json({ 
        success: false, 
        message: 'Error deleting product return',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
        errorId: uuidv4() // Generate a unique error ID for tracking
      });
    }
  };