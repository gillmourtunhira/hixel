// import employee model
const Employee = require('./../models/employee');

exports.login = ((req, res, next) => {
    Employee.findById('5f20b2148ce5a13cdc8626fd')
        .then((result) => {
            if (req.body.password === result.password) {
                res.redirect('./admin/index');
            } else if (req.body.password !== result.password) {
                res.render('404', {
                    title: '404 | Not found',
                    data: 'Sorry mate, content not found'
                });
            }
        })
        .catch(err => console.log(err));
    //res.redirect('/hixel/admin');
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