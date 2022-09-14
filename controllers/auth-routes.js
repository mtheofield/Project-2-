// const sequelize = require('../config/connection');
// const {User} = require('../models');
const router = require('express').Router();
router.get('/login', (req, res) => {
   
            res.render('login');

});
router.get('/signup', (req, res) => {
   
    res.render('signup');

});

module.exports = router;