const express = require('express');

// Middleware
const router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect('/hixel');
});

router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'About Us',
        data: 'About Us'
    });
});

module.exports = router;