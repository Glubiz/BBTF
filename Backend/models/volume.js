const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Volumes = sequelize.define('Volumes', {
  Amount : {
    type: Sequelize.BIGINT,
    allowNull: true
    },
  Value : {
    type: Sequelize.FLOAT,
    allowNull: true
    },
  Hash : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Sender : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Receiver : {
    type: Sequelize.STRING,
    allowNull: true
    },
  Type : {
    type: Sequelize.STRING,
    allowNull: true
    }
}, {
  id: false
});

module.exports = Volumes;