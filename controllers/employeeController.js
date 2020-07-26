exports.profile = ((req, res, next) => {
    res.render('./employee/profile', {
        title: 'Employee Profile',
        data: 'Employee Details'
    });
});

exports.create = ((req, res, next) => {
    res.render('./employee/create', {
        title: 'Hixel | Create New Profile',
        data: 'New Employee Profile'
    });
});