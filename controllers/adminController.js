// import employee model
const Employee = require('./../models/employee');
const bcrypt = require('bcrypt');
const {
    render
} = require('../app');

exports.login = ((req, res, next) => {
    const userPassword = req.body.password;
    const userName = req.body.username;
    Employee.findOne({
            username: userName
        })
        .then((result) => {
            const hash = result.password;
            bcrypt.compare(userPassword, hash, function (err, response) {
                //console.log(response);
                if (err) {
                    throw err;
                } else if (!response) {
                    console.log('Password dosent match!');
                    req.flash('info', 'Password dosent match!');
                    res.redirect('/');
                } else {
                    console.log('Password matches!');
                    req.session.user = result;
                    res.redirect('./admin/dashboard');
                }
            });
        })
        .catch(err => console.log(err));
});

exports.logout = ((req, res) => {
    req.session.destroy(function () {
        console.log('User logged out.');
    });
    res.redirect('/');
});

exports.index = ((req, res, next) => {
    res.render('./admin/index', {
        title: 'Hixel | Admin Console',
        data: 'Admin Page'
    });
});

exports.dashboard = ((req, res) => {
    res.render('./admin/dashboard', {
        title: 'Hixel | Admin Dasboard',
        data: 'Dashboard'
    });
});

exports.employees = ((req, res, next) => {
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
});

exports.create = ((req, res, next) => {
    // console.log(req.body.employeeId);
    // res.end();
    const employee = new Employee({
        employeeId: req.body.employeeId,
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        username: req.sanitize(req.body.username),
        password: req.sanitize(req.body.password),
        department: req.body.department,
        role: req.body.role,
        email: req.body.email,
        mobile: req.body.mobile,
        joinedDate: req.body.joinedDate,
        employmentStatus: {
            fullTime: req.body.fullTime
        }
    });

    employee.save()
        .then((result) => {
            req.session.user = employee;
            res.redirect('/hixel/admin/employees');
        })
        .catch(err => console.log(err));
});

exports.profile = ((req, res, next) => {
    const id = req.params.id;
    Employee.findById(id)
        .then((result) => {
            res.render('./employee/profile', {
                title: 'Employee Profile',
                data: 'Employee Profile Details',
                details: result
            });
        });
});