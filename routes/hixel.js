const express = require('express');
const router = express.Router();

// Require controller modules.
const homeController = require('./../controllers/homeController');
const adminController = require('./../controllers/adminController');
const employeeController = require('./../controllers/employeeController');
const leaveController = require('./../controllers/leaveController');
const {
    route
} = require('.');

function checkSignIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.flash('info', 'Login to proceed!');
        res.redirect('/');
    }
}

// Home Route
router.get('/', homeController.home);

// Admin Routes
router.get('/admin', checkSignIn, adminController.index);
router.get('/admin/employees', checkSignIn, adminController.employees);
router.get('/admin/dashboard', checkSignIn, adminController.dashboard);
router.get('/admin/leave', checkSignIn, leaveController.leave);
router.get('/admin/employees/create', checkSignIn, employeeController.create);
router.get('/admin/employees/:id/profile', checkSignIn, adminController.profile);

router.post('/admin/employees/create', adminController.create);
router.post('/admin', adminController.login);


// Employee Routes
router.get('/employee/:id/profile', employeeController.profile);

// Leave Routes

router.get('/logout', adminController.logout);


module.exports = router;