const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gallery extends Model {}

Gallery.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:"User",
            key: "id",
        },
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true, 
    underscored: true,
    modelName: "Gallery",
  }
);




module.exports = Gallery;