const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Wallets = sequelize.define('Wallets', {
  Adress : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Amount : {
    type: Sequelize.BIGINT,
    allowNull: true
    }
});

module.exports = Wallets;