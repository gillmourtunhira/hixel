exports.home = ((req, res) => {
    res.render('index', {
        title: 'Hixel | HRM Web-Application',
        data: 'Welcome to Hixel HRM System'
    });
});