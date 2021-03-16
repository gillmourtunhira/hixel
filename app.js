if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const expressSanitizer = require('express-sanitizer');
const session = require('express-session');
const flash = require('connect-flash');

// Setup mongoose connection
const mongoose = require('mongoose');
const mongoDB = ''; // create a MongoDB Atlas Cluster, and add the link here
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

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(expressSanitizer());
app.use(session({
    secret: process.env.SESSION_SECRECT,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Set Routes
app.use('/', indexRouter);
app.use('/hixel', hixelRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: '404 | Not Found',
        data: 'Sorry mate, content not found'
    });
});


module.exports = app;
