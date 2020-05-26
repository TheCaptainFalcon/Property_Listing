const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    keys = require('./config/dev'),
    passport = require('passport'),
    cors = require('cors');


const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
};

const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');
    listingsRouter = require('./routes/listings');

    
    
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/listings', listingsRouter);

mongoose.connect(keys.mongoURI);

app.use(passport.initialize());

require('./config/passport')(passport);



module.exports = app;
