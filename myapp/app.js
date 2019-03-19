const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

//require passport config
require('./config/passport')(passport);

//db Config
const db = require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongodb Connected...."))
    .catch((err) => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//express session 
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//flash messages
app.use(flash());

//global variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

//BodyParser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
