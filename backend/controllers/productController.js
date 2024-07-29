import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({})
    res.status(200).json(products)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        return res.status(200).json(product)
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
}) 