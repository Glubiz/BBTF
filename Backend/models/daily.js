const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const DalilyChange = sequelize.define('DalilyChange', {
  Adress : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Amount : {
    type: Sequelize.BIGINT,
    allowNull: true
    },
  Percentage : {
    type: Sequelize.FLOAT,
    allowNull: true
    }
});

module.exports = DalilyChange;