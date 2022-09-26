const Sequelize = require('sequelize');

const sequelize = require('./../util/db');

const Holders = sequelize.define('Holders', {
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
    },
  Change : {
    type: Sequelize.BIGINT
    },
  ChangeY : {
    type: Sequelize.BIGINT
    }
});

module.exports = Holders;