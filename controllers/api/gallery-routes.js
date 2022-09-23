const router = require('express').Router();
const { Gallery, Image } = require('../../models');
const cloudinary= require('cloudinary');
require('dotenv').config();
const fs= require ('fs');

cloudinary.config({ 
    cloud_name: 'duptjpunl', 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
  });

router.get('/', (req, res) => {
    
});

router.post('/', (req, res) => {
  const name=req.body.name
  Gallery.create({
    name: name,
    users_id: req.session.user_id
})
.then(dbUserData => {
    res.send ({success:true})
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.post('/upload/:gallery_id', (req, res) => {
    console.log(req.files)
    req.files.file.mv('./'+req.files.file.name, function(err) {
        cloudinary.v2.uploader.upload('./'+req.files.file.name, {
            tags:[req.params.gallery_id]
        }).then((result)=>{ console.log(result)
                Image.create({
                    url: result.url,
                    user_id: req.session.user_id,
                    gallery_id: req.params.gallery_id
                })
                fs.unlinkSync('./'+req.files.file.name)
                res.send ({success:true})
            })
            .catch(err => {
                fs.unlinkSync('./'+req.files.file.name)
                console.log(err);
                res.status(500).json(err);
            });
    });
   
});
router.get('/upload/:id', function(req, res) { 
     res.render('media', {'layout': 'main', 'id': req.params.id,'cloudinaryName':process.env.CLOUDINARY_CLOUD_NAME, 'cloudinaryUrl': process.env.CLOUDINARY_UPLOAD_PRESET})})  
     
     router.get('/list', function(req, res) 
     {let images = [];  
        cloudinary.fetchGallery()   
         .then((response) => 
         {      // console.log(response.resources)      
            //res.render('medialist', {'layout': 'main', 'mediaItems': response.resources})    })
            console.log(response)
     res.render('medialist', {'layout': 'main'});
    });
});

  module.exports = router;

router.delete('/:id', (req, res) => {
    
});

module.exports = router;