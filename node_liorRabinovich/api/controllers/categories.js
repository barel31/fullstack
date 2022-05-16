const mongoose = require('mongoose');
const Category = require('../models/Category');

module.exports = {
    getAllCategories: (req, res) => {
        Category.find()
            .then((categories) => {
                res.status(200).json({
                    categories,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error,
                });
            });
    },
    getCategory: (res, req) => {
        Category.findById(req.params.categoryId)
            .then((category) => {
                res.status(200).json({
                    category,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error,
                });
            });
    },
    createCategory: (req, res) => {
        const { title, description } = req.body;

        const categories = new Category({
            _id: new mongoose.Types.ObjectId(),
            title,
            description,
        });

        Article.save()
            .then(() => {
                res.status(200).json({
                    message: 'Created category',
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error,
                });
            });
    },
    updateCategory: (req, res) => {
        Article.updateOne({ _id: req.params.articleId }, req.body)
            .then(() => {
                res.status(200).json({
                    message: 'Category Updated',
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error,
                });
            });
    },
    deleteCategory: (req, res) => {
        Category.deleteOne({ _id: req.params.categoryId })
            .then(() => {
                res.status(200).json({
                    message: `Category ${req.params.categoryId} Deleted`,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error,
                });
            });
    },
};
