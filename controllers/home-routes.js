const {Gallery} = require('../models');
const router = require('express').Router();
const cloudinary= require('cloudinary');
require('dotenv').config();

cloudinary.config({ 
    cloud_name: 'duptjpunl', 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
  });

router.get('/', (req, res) => {
        res.render('home', { loggedIn: !!req.session.user_id });    
});

router.get('/gallery', (req, res) => {
    if(!req.session.user_id){return res.redirect("/")}
    Gallery.findAll({
        where: {
            users_id: req.session.user_id
        },
        attributes: [
            'id',
            'name'
        ],
        
    })
    .then(async dbPostData => {
        const galleryitems = dbPostData.map(gallery => gallery.get({ plain: true }));
        const newGalleries = []
        for(let gallery of galleryitems){
            const images= await cloudinary.v2.search
            .expression('resource_type:image AND tags='+gallery.id)
            .max_results(30)
            .execute()
            gallery.images=images
            newGalleries.push(gallery)
        }
        console.log(newGalleries);
        console.log('test');
        res.render('gallery', { loggedIn: true, galleryitems:newGalleries });    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});
module.exports = router;