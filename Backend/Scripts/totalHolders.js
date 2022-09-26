const cheerio = require('cheerio');
const axios = require('axios');
const { Op } = require("sequelize");
const Sequelize = require('sequelize');
const sequelize = require('./../util/db');
const Stats = require('../models/stat');
var mysql = require('mysql');

// var holders = Hodlers.HoldersNum
// holders = 2810000
const totalHolders = require('./../models/totalHolders'); 
const apikey = '5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ'
const contracts = require('../util/contracts');

var contract
if (contracts.SafemoonV2){
  contract = contracts.SafemoonV2
} else {
  contract = contracts.Safemoon
}

const offset = 10000

var holdersNum
var temp = []

async function collectHolders() {
  Stats.findOne({order: [
    ['createdAt', 'DESC']
  ]})
  .then(async result => {
    holdersNum = result.Holders
    console.log(holdersNum)
    if (holdersNum > 0){
      holders = Math.ceil(holdersNum / offset)
      console.log("Result = " + holders)
      console.log("Estimated runtime = " + (((holders / 5) * 17.5) / 60).toString() + " minutes")
      for (let i = 1; i <= holders; i += 5) {
        fetch(i)
        await new Promise((resolve => setTimeout(resolve,3000)))
        fetch(i+1)
        await new Promise((resolve => setTimeout(resolve,3000)))
        fetch(i+2)
        await new Promise((resolve => setTimeout(resolve,3000)))
        fetch(i+3)
        await new Promise((resolve => setTimeout(resolve,3000)))
        fetch(i+4)
        await new Promise((resolve => setTimeout(resolve,3000)))
    
      }
      await new Promise((resolve => setTimeout(resolve,30000)))
      pushData()
    } else {
      
    }
      // await new Promise((resolve => setTimeout(resolve,300000)))
      // conn.end()
  
    // })
  })
}

function fetch(page){
  var now = new Date()
  console.log(page)
  require('axios')
  .get('https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress=' + contract + '&page=' + page + '&offset=' + offset + '&apikey=' + apikey)
  .then(async (response) => {
    console.log(response.data.result)
    if (typeof response !== 'undefined' && response !== null && response) {
      for (let holder of response.data.result){
        holder.TokenHolderQuantity = parseInt(holder.TokenHolderQuantity / 1000000000)
        var arr = [holder.TokenHolderAddress, holder.TokenHolderQuantity, now]
        temp.push(arr)
      }
      console.log(page + ' Done - arr length = ' + temp.length)
    } else {
    }
  })
  .catch(err => console.log('page: ' + page + ' - error: ' + err));
}


async function pushData(){
  if (temp.length > holdersNum - 1000 && temp.length != 0){
    var conn = mysql.createConnection({
      host     : 'web2.netgiganten.dk',
      user     : 'damibfko_josj',
      password : '7riF@6IYnP9g',
      database : 'damibfko_SafemoonGlubiz',
      multipleStatements: true
    });
    // deleteData();
    // await new Promise((resolve => setTimeout(resolve,30000)))
    console.log("Insert into from DB")
    var sql = "DELETE FROM damibfko_SafemoonGlubiz.TotalHolders; ALTER TABLE damibfko_SafemoonGlubiz.TotalHolders AUTO_INCREMENT = 1; INSERT INTO damibfko_SafemoonGlubiz.TotalHolders (Address, Balance, createdAt) VALUES ?";
    console.log("Query prepared")
    var values = temp;
    console.log("Values prepared")
    conn.query(sql, [values], async function(err) {
      console.log("Query Run")
        if (err) throw err;
        // conn.end();
    })
    await new Promise((resolve => setTimeout(resolve,150000)))
    console.log("Clear Array")
    temp = []
    console.log(temp.length)
    conn.end();
  } else {
    console.log("Clear Array")
    temp = []
    console.log(temp.length)
  }
}

collectHolders();
setInterval(collectHolders, 1800000)
// setInterval(loader, 7200000)

// module.exports = collectHolders();