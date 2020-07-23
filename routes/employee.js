const express = require('express');
// import employee model
const Employee = require('./../models/employee');

// Middleware
const router = express.Router();

// array for test
const employees = ['Gillmour', 'Victoria', 'Talia'];

router.get('/', (req, res, next) => {
    Employee.find()
        .then((result) => {
            //res.send(result);
            res.render('./employee/index', {
                title: 'Employees | View',
                data: 'Employees List',
                employees: result
            });
        })
        .catch((err) => console.log(err));
    // res.render('./employee/index', {
    //     title: 'Employees View',
    //     data: 'Employees List',
    //     employees
    // });
});

router.get('/leave', (req, res, next) => {
    res.render('./employee/leave', {
        title: 'HR | Leave Form',
        data: 'Leave Form'
    });
});

router.get('/profile', (req, res, next) => {
    res.render('./employee/profile', {
        title: 'Employee Profile',
        data: 'Employee Details'
    });
});

module.exports = router;