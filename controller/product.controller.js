const productModel = require('../model/product.model');

const getAllProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: `Error while getting products: ${error}` });
    }
};

const createProduct = async (req, res) => {
    const { name, description, images, price, category } = req.body || {};
    try {
        const product = new productModel({ name, description, images, price, category });
        const createdProduct = await product.save();
        return res.status(201).json(createdProduct);
    } catch (error) {
        return res.status(500).json({ message: `Error while creating product: ${error}` });
    }
};

const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    const { name, description, images, price, category } = req.body || {};
    console.log(productId)

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            productId,
            { name, description, images, price, category },
            { new: true }
        );

        console.log(updatedProduct)

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: `Error while updating product: ${error}` });
    }
};

const deleteProduct = async (req, res) => {
    const productId = req.params.productId;

    try {
        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: `Error while deleting product: ${error}` });
    }
};

module.exports = { getAllProduct, createProduct, updateProduct, deleteProduct };
