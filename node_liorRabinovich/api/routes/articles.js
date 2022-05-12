const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get All Articles',
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Create new article',
    });
});

router.patch('/:articleId', (req, res) => {
    res.status(200).json({
        message: 'Update article',
    });
});

exports = router;
