const express = require('express');
const router = express.Router();

const { getAllCategories, createCategory, updateCategory, deleteCategory, getCategory } = require('../controllers/categories');

router.get('/', getAllCategories);
router.post('/', createCategory);
router.get('/:categoryId', getCategory);
router.patch('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

module.exports = router;
