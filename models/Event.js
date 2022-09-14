const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {
    
}

Event.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull:false,
        unique: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true,
        unique: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
  },
  {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event'
  }
);

module.exports = Event;