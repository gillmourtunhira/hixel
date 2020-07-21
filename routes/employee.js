const express = require('express');

const Employee = require('./models/employee');

// Middleware
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('./employee/index', {
        title: 'Employees View',
        data: 'Employees List',
        employees
    });
});

router.get('/profile', (req, res, next) => {
    res.render('./employee/profile', {
        title: 'Employee Profile',
        data: 'Employee Details'
    });
});

module.exports = router;