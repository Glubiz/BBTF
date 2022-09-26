const Stat = require('../models/stat')
const StatsFunction = require('../middleware/Stats')
const Whales = require('../middleware/Whales')
const Volume = require('../middleware/volume')
//This file contains all the pages that can be loaded on the website
exports.getIndex = (req, res, next) => {
    res.render('main/index', {
      pageTitle: 'Index',
      path: '/'
    });
};
