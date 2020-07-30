const express = require('express');
const path = require('path');
const morgan = require('morgan');
const expressSanitizer = require('express-sanitizer');
const session = require('express-session');
// import employee model
const Employee = require('./models/employee');

// Setup mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://artisan:artisan2020@nodetuts-c3h20.mongodb.net/hixel?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// User
const indexRouter = require('./routes/index');
const hixelRouter = require('./routes/hixel');

const app = express();
//const port = process.env.PORT || 4000;

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(expressSanitizer());
app.use(session({
    secret: 'walnut',
    resave: true,
    saveUninitialized: false
}));

// mongoose and mongo sandbox routes
app.get('/add-employee', (req, res) => {
    const employee = new Employee({
        employeeId: 200210,
        name: {
            firstName: 'Victoria',
            lastName: 'Tunhira'
        },
        department: 'Financial Science',
        role: 'staff',
        email: 'victoria@hit.ac.zw',
        mobile: 775534576
    });
    employee.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

// Middleware
app.use('/', indexRouter);
app.use('/hixel', hixelRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 | Not Found',
        data: 'Sorry mate, content not found'
    });
});

module.exports = app;