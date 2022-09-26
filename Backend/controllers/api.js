const { Op } = require("sequelize");
const axios = require("axios");
const sequelize = require('../util/db');
const Prices = require('../models/price')
const VolumeDB = require('../models/volume')
const HoldersDB = require('../models/totalHolders')

const {Thresholds} = require('../middleware/listHolders')
const {Stats} = require('../middleware/LoadStats');
const {ExchangeRates} = require('../middleware/Currencies');

const StatsFunction = require('../middleware/Stats')
const Whales = require('../middleware/Whales')
const Volume = require('../middleware/Volume');
const { Safemoon } = require("../util/contracts");
const exclude = require("../util/excluded");


//This file contains all the api calls that the domain can handle
exports.getData = (req, res, next) => {
  Stats.Rates = ExchangeRates
  res.status(200).send(Stats);
};

exports.getHoldersSummary = (req, res, next) => {
  res.status(200).send(Thresholds)
};

exports.getSupply = (req, res, next) => {
  Stats.Rates = ExchangeRates
  res.status(200).send(Stats);
};

exports.paginatedHolders = (req, res, next) => {
  const page = req.query.page
  const elements = 10
  // SELECT ROW_NUMBER() OVER(ORDER BY Balance desc) AS num_row, Address, Balance FROM damibfko_mym.TotalHolders ORDER BY Balance desc
  var lower = (parseInt(page) * elements) - elements + 1
  var upper = (parseInt(page) * elements)
  sequelize.query('SELECT * FROM (SELECT ROW_NUMBER() OVER(ORDER BY Balance desc) AS num_row, Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders ORDER BY Balance desc) a WHERE a.num_row BETWEEN ' + lower + ' AND ' + upper + ' LIMIT 10', {type: sequelize.QueryTypes.SELECT})
  .then(result => {
    // console.log(result)
    res.status(200).send(result);
  })
};

exports.getHolderBracket = (req, res, next) => {
  var Lower = req.query.Lower
  var Upper = req.query.Upper

  sequelize.query('SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN ' + Lower + ' AND ' + Upper + ' AND ADDRESS NOT IN (' + exclude + ') LIMIT 1', {type: sequelize.QueryTypes.SELECT})
  .then(result => {
    // console.log(result)
    result[0].Lower = Lower
    result[0].Upper = Upper
    res.status(200).send(result);
  })
};

exports.getWhales = (req, res, next) => {
  sequelize.query('SELECT ROW_NUMBER() OVER(ORDER BY Amount desc) AS num_row, Adress, Amount, `Change`, ChangeWeek FROM damibfko_SafemoonGlubiz.Whales ORDER BY Amount DESC LIMIT 100', {type: sequelize.QueryTypes.SELECT})
  .then(result => {
    res.status(200).send(result);
  })
};

exports.getTransactions = (req, res, next) => {
  var now = new Date()
  now.setDate(now.getDate() - 1)
  var UNIX = new Date().getTime().toString()
  UNIX = parseInt((UNIX / 1000) / 60)
  var temp = []

  sequelize.query('SELECT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Sell" AND createdAt > now() - interval 24 hour GROUP BY Hash ORDER BY Amount DESC LIMIT 5;', {type: sequelize.QueryTypes.SELECT})
  .then(sells => {
    for (let Sell of sells){
      Sell.createdAt = new Date(Sell.createdAt).getTime().toString()
      Sell.createdAt = parseInt((Sell.createdAt / 1000) / 60)
      Sell.createdAt = parseInt(UNIX - Sell.createdAt) + 120
    }
    temp.push(sells)

    sequelize.query('SELECT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Buy" AND createdAt > now() - interval 24 hour GROUP BY Hash ORDER BY Amount DESC LIMIT 5;', {type: sequelize.QueryTypes.SELECT})
    .then(buys => {
      for (let Buy of buys){
        Buy.createdAt = new Date(Buy.createdAt).getTime().toString()
        Buy.createdAt = parseInt((Buy.createdAt / 1000) / 60)
        Buy.createdAt = parseInt(UNIX - Buy.createdAt) + 120
      }
      temp.push(buys)
      res.status(200).send(temp);
    })
  })
};

// exports.getTransactionDistribution = (req, res, next) => {
//   var now = new Date().setDate(new Date().getDate() - 1)
//   sequelize.query('SELECT DISTINCT Hash, SUM(Value) as Sum FROM damibfko_SafemoonGlubiz.Volume WHERE Type = "Sell" AND createdAt > ' + now + ' ORDER BY Amount DESC LIMIT 1', {type: sequelize.QueryTypes.SELECT})
//   .then(sells => {
//     console.log(sells)
//     temp.push(sells)
//     sequelize.query('SELECT DISTINCT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volume WHERE Amount > 15000000 AND Type = "Buy" AND createdAt > ' + now + ' ORDER BY Amount DESC LIMIT 5', {type: sequelize.QueryTypes.SELECT})
//     .then(buys => {
//       temp.push(buys)
//       sequelize.query('SELECT DISTINCT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volume WHERE Amount > 15000000 AND Type = "Transfer" AND createdAt > ' + now + ' ORDER BY Amount DESC LIMIT 5', {type: sequelize.QueryTypes.SELECT})
//       .then(transfer => {
//         temp.push(transfer)
//         res.status(200).send(temp);
//       })
//     })
//   })
// }

exports.getWalletBalance = (req, res, next) => {
  var address = req.query.Address
  
  HoldersDB.findOne({
    where: {
      Address : address
    }
  })
  .then(responseData => {
    res.send(responseData);
  })
  .catch(err => console.log(err))
}

exports.getPrices = (req, res, next) => {  
  Prices.findAll({order: [['createdAt', 'ASC']]})
  .then(result => {
    Stats.Rates = ExchangeRates
    res.status(200).send({Stats : Stats, Prices : result});
  })
};

exports.getTracker = (req, res, next) => {
  const appKey = '5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ'
  const contract = '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3'
  const contract2 = '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5'
  const transactionAmount = 10000 
  var address = req.query.Wallet
  var Data = {}
  var SafemoonV1
  var SafemoonV2
  var Balance
  
  //https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5&address=0x678ee23173dce625a90ed651e91ca5138149f590&offset=10000&sort=desc&apikey=6HVT4VDREBIERJ8WF3PAPTKYJXSGIQQSAV
  axios
  .get("https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" + contract + "&address=" + address + "&offset=" + transactionAmount + "&sort=asc&apikey=" + appKey)
  .then(responseData => {
    if (responseData.data.result){
      SafemoonV1 = responseData.data.result
    }
  })
  .then(() => {
    axios
    .get("https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" + contract2 + "&address=" + address + "&offset=" + transactionAmount + "&sort=asc&apikey=" + appKey)
    .then(responseData => {
      if (responseData.data.result){
        SafemoonV2 = responseData.data.result
      }
    })
    .then(() => {
      axios
      .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=" + contract2 + "&address=" + address.toLowerCase() + "&tag=latest&apikey=" + appKey)
      .then(responseData => {
        if (responseData.data.result){
          Balance = responseData.data.result
        }
        Data = {V1 : SafemoonV1, V2 : SafemoonV2, Balance : Balance}
          console.log(Data)
          res.status(200).send(Data);
      })
    })
  })
};

exports.HolderData = (req, res, next) => {
  var address = req.query.Address
  
  HoldersDB.findOne({
    where: {
      Address : address
    }
  })
  .then(responseData => {
    sequelize.query('SELECT a.num_row FROM (SELECT ROW_NUMBER() OVER(ORDER BY Balance desc) AS num_row, Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address NOT IN (' + exclude + ') ORDER BY Balance desc) as a WHERE Address = "' + address + '"', {type: sequelize.QueryTypes.SELECT})
    .then(result => {
      result = result
      res.status(200).send({Balance: responseData.Balance, Position : result, TotalHolders: Stats.TotalHolders})
    })
  })
  .catch(err => console.log(err))
};

exports.CombinedPosition = (req, res, next) => {
  var Balance = req.query.Balance
  
  sequelize.query('SELECT a.num_row FROM (SELECT ROW_NUMBER() OVER(ORDER BY Balance desc) AS num_row, Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address NOT IN (' + exclude + ') ORDER BY Balance desc) as a WHERE Balance < "' + Balance + '" limit 1', {type: sequelize.QueryTypes.SELECT})
  .then(result => {
    console.log(result)
    res.status(200).send(result)

  })
  .catch(err => console.log(err))
};

exports.HolderTransactions = (req, res, next) => {
  var Address = req.query.Address
  
  const appKey = '5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ'
  const contract = '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3'
  const contract2 = '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5'
  const transactionAmount = 10000 
  var SafemoonV1
  var SafemoonV2

  axios
  .get("https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" + contract + "&address=" + Address + "&offset=" + transactionAmount + "&sort=asc&apikey=" + appKey)
  .then(responseData => {
    if (responseData.data.result){
      SafemoonV1 = responseData.data.result
    }
  })
  .then(() => {
    axios
    .get("https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" + contract2 + "&address=" + Address + "&offset=" + transactionAmount + "&sort=asc&apikey=" + appKey)
    .then(responseData => {
      if (responseData.data.result){
        SafemoonV2 = responseData.data.result
        res.status(200).send({V1 : SafemoonV1, V2 : SafemoonV2})
      }
    })
  })
};

exports.fetchHolders = (req, res, next) => {
  const holderAddress = req.query.Wallet;

  sequelize.query('SELECT a.num_row FROM (SELECT ROW_NUMBER() OVER(ORDER BY Balance desc) AS num_row, Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address NOT IN (' + exclude + ') ORDER BY Balance desc) as a WHERE Address = "' + holderAddress + '"', {type: sequelize.QueryTypes.SELECT})
  .then(result => {
    res.status(200).send(result)
  })
}