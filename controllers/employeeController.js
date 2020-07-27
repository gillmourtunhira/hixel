exports.profile = ((req, res, next) => {
    res.render('./employee/profile', {
        title: 'Employee Profile',
        data: 'Employee Details'
    });
});

exports.create = ((req, res, next) => {
    res.render('./employee/createprofile', {
        title: 'Hixel | Create New Profile',
        data: 'Create Employee Profile'
    });
});