const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Currencies = sequelize.define('Currencies', {
  Ticker : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Rate : {
    type: Sequelize.FLOAT,
    allowNull: true
    }
});

module.exports = Currencies;