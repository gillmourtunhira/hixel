const express = require('express');
const path = require('path');
const morgan = require('morgan');

// Setup mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://artisan:artisan2020@nodetuts-c3h20.mongodb.net/hixel?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// import employee model
const Employee = require('./models/employee');

// User
const indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employee');
// Admin
const adminRouter = require('./routes/admin');

const app = express();
//const port = process.env.PORT || 4000;

// Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));

// Index Routes
app.use('/', indexRouter);
app.use('/about', indexRouter);

// Employee Routes
app.use('/employee', employeeRouter);

// Admin Routes
app.use('/admin', adminRouter);
app.use('/dashboard', adminRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 | Not Found',
        data: 'Sorry mate, content not found'
    });
});

/*app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});*/

module.exports = app;