// const sequelize = require('../config/connection');
// const {User} = require('../models');
const router = require('express').Router();
router.get('/', (req, res) => {
   
            res.render('home', { loggedIn: true });

});
module.exports = router;