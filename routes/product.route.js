const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product.controller');


const router = express.Router();

router.get('/all', getAllProduct);
router.post('/create', createProduct);
router.put('/update/:productId',updateProduct);
router.delete('delete/:productId',deleteProduct);

module.exports = router;