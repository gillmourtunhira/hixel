exports.home = (async (req, res) => {
    res.render('login', {
        title: 'Hixel | HRM Web-Application',
        message: await req.flash('info'),
        error: false
    });
});