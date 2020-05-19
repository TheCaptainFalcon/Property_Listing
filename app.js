const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    keys = require('./config/dev'),
    passport = require('passport')


const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect(keys.mongoURI);

app.use(passport.initialize());

require('./config/passport')(passport);



module.exports = app;
