const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const galleryRoutes = require('./gallery-routes.js');

router.use('/users', userRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;