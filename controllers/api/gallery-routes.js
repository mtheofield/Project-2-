const router = require('express').Router();
const { Gallery } = require('../../models');

router.get('/', (req, res) => {
    
});

router.post('/upload', (req, res) => {
    console.log(req.files)
});


router.delete('/:id', (req, res) => {
    
});

module.exports = router;