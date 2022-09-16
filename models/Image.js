const { Model, DataTypes } = require('sequelize');
const sequelize = require('sequelize');

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    artist: {
        type: DataTypes.STRING,
        allowNull:true,
    },
filenames: {
    type: DataTypes.STRING,
    allowNull:true,
},
gallery_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    references: {
        modelName: 'Gallery',
        key: 'id',
    },
},

user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        modelName: 'User',
        key: 'id', 
    }
}
    },

    {
        sequelize,
        timestamps: true,  
        freezeTableName: true,
        underscored: true,
        modelName: "Image"
    }
    
);

module.exports = Image; 