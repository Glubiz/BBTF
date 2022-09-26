const Sequelize = require('sequelize');

const sequelize = new Sequelize('damibfko_SafemoonGlubiz', 'damibfko_josj', '7riF@6IYnP9g', {
    host: 'web2.netgiganten.dk',
    dialect: 'mysql'
});

module.exports = sequelize;