const express = require('express');
const router = express.Router();

// Require controller modules.
const homeController = require('./../controllers/homeController');
const adminController = require('./../controllers/adminController');
const employeeController = require('./../controllers/employeeController');
const leaveController = require('./../controllers/leaveController');

// Home Route
router.get('/', homeController.home);

// Admin Routes
router.get('/admin', adminController.index);
router.get('/admin/employees', adminController.employees);
router.get('/admin/dashboard', adminController.dashboard);
router.get('/admin/leave', leaveController.leave);

// Employee Routes
router.get('/employee/:id/profile', employeeController.profile);

// Leave Routes



module.exports = router;