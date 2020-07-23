exports.profile = ((req, res, next) => {
    res.render('./employee/profile', {
        title: 'Employee Profile',
        data: 'Employee Details'
    });
});