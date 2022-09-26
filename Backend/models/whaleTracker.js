const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Whales = sequelize.define('Whales', {
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
  PercentageHalf : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  PercentageDay : {
    type: Sequelize.FLOAT,
    allowNull: true
    },
  PercentageWeek : {
    type: Sequelize.FLOAT,
    allowNull: true
    },
  ChangeHalf : {
    type: Sequelize.BIGINT
  },
  ChangeHalfPercentage : {
    type: Sequelize.FLOAT
  },
  Change : {
    type: Sequelize.BIGINT
    },
  ChangePercentage : {
    type: Sequelize.FLOAT
    },
  ChangeWeek : {
    type: Sequelize.BIGINT
    },
  ChangeWeekPercentage : {
    type: Sequelize.FLOAT
    },
});

module.exports = Whales;