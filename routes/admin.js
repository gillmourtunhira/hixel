const express = require('express');

// Middleware
const router = express.Router();

router.get('/', (req,res,next) => {
    res.render('./admin/index', {
        title: 'Hixel | Admin Console',
        data: 'Admin Page'
    });
});

router.get('/dashboard', (req,res,next) => {
    res.render('./admin/dashboard', {
        title: 'Hixel | Admin Dashboard',
        data: 'Admin View Details'
    });
});

module.exports = router;