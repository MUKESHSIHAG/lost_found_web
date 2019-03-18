const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get("/", (req, res) => res.render("welcome"));

//Home route
router.get("/welcome", isLoggedIn, (req, res) => {
    res.render("home", {
        user: req.user, isLoggedIn: req.isAuthenticated()
    }) 
});

//dashboard route
router.get("/dashboard", ensureAuthenticated, (req, res) => 
    res.render("dashboard", {
        name: req.user.name
}));

//restaurants route
router.get("/restaurants", ensureAuthenticated, (req, res) => 
    res.render("restaurants"));

function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
       req.isLogged = false
       console.log(req.isLogged);
       return next();
    } else {
        req.isLogged = true
        return next();
    }
    res.redirect('/');
}

module.exports = router