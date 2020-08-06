const LocalStrategy = require('passport-local').Strategy;

const Employee = require('./../models/employee');

// Local Login
module.exports = function (passport) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            Employee.findOne({
                username: username
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }
                if (user.password != password) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                return done(null, user);
            });
        }
    ));
}