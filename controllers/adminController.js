// import employee model
const Employee = require('./../models/employee');

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