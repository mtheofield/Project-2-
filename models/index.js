const User = require('./User');
const Gallery = require('./Gallery');
const Image = require('./Image');

User.hasMany(Gallery, {
    foreignKeys: 'users_id',
    onDelete: 'CASCADE',
});

Gallery.belongsTo(User, {
    foreignKeys: 'users_id',
});

User.hasMany(Image, { 
    foreignKeys: 'user_id', 
    onDelete: 'CASCADE',
});

Image.belongsTo(User, {
    foreignKeys: 'user_id',
});

Gallery.hasMany(Image, {
    foreignKeys: 'gallery_id',
    onDelete: 'CASCADE',
}); 

Image.belongsTo(Gallery, {
    foreignKeys: 'gallery_id',
});



module.exports = { User, Gallery, Image };