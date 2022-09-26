const axios = require('axios')
const TotalHoldersDB = require('../models/totalHolders')
const VolumeDB = require('../models/volume')
const sequelize = require('../util/db');
const exclude = require("../util/excluded");
const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
const appKey = '5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ'
const Safemoon = '0x856a1c95bef293de7367b908df2b63ba30fbdd59'


var BNBPrice = 0
var SafemoonPrice = 0

const Test = () => {
  TotalHoldersDB.findOne({
    where: {
        Address: '0x856a1c95bef293de7367b908df2b63ba30fbdd59'
    }
  })
  .then(LP => {
      console.log((400000000000 - LP.Balance) / LP.Balance)
  })
}

Test()