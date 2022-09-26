const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Price = sequelize.define('Price', {
  snapped_at : {
    type: Sequelize.STRING,
    allowNull: true
    },
  price : {
    type: Sequelize.DOUBLE,
    allowNull: true
    }
});

module.exports = Price;