const passport = require('passport');

exports.login = passport.authenticate('local', {
    successRedirect: '/hixel/admin',
    failureRedirect: '/hixel',
    failureFlash: true
});