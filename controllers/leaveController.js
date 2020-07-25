exports.leave = ((req, res, next) => {
    res.render('./employee/leave', {
        title: 'HR | Leave Form',
        data: 'Leave Form'
    });
});