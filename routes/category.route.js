const express = require('express');
const { getAllCategory, createCategory, updateCategory, deleteCategory } = require('../controller/category.controller');

const router = express.Router();

router.get('/all', getAllCategory);
router.post('/create', createCategory);
router.put('/update/:categoryId',updateCategory);
router.delete('/delete/:categoryId',deleteCategory);

module.exports = router;