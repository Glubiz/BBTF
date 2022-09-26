const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const TotalHolders = sequelize.define('TotalHolders', {
  Address : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Balance : {
    type: Sequelize.BIGINT,
    allowNull: true
    },
  Change : {
    type: Sequelize.BIGINT
    }
});

module.exports = TotalHolders;