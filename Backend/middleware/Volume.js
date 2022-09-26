const axios = require('axios');
const { Op } = require("sequelize");
const mysql = require('mysql2');

const { Stats } = require('./LoadStats')
const sequelize = require('../util/db');

const contracts = require('../util/contracts');
const transactionAmount = "10000"

var contract = contracts.SafemoonV2

// https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x678ee23173dce625a90ed651e91ca5138149f590&page=1&offset=100&sort=desc&apikey=5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ

const url = 'https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=' + contract + '&page=1&offset=' + transactionAmount + '&sort=desc&apikey=5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ';

var hash

async function Volume() {
  axios
  .get(url)
  .then(async response => {
    var arr = []
    if(!hash){
      sequelize.query('SELECT Hash FROM damibfko_SafemoonGlubiz.Volumes ORDER BY createdAt DESC LIMIT 1;', {type: sequelize.QueryTypes.SELECT})
      .then(result => {
        if (result[0]){
          hash = result[0].Hash
        }
        // console.log(result[0].Hash)
      })
    }
    for (let tnx of response.data.result){
      var type = ''
      var amount = parseInt(tnx.value / 1000000000)
      if(tnx.to == '0x0000000000000000000000000000000000000001' || 
      tnx.to == '0xefecd68f9549d47cbeca0a2fd9bd09cf4ec6a5d6' || 
      tnx.to == '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5'){
        type = 'Tax'
      } else if (
        (tnx.from == '0x856a1c95bef293de7367b908df2b63ba30fbdd59' && 
        tnx.to == '0x678ee23173dce625a90ed651e91ca5138149f590') || 
        (tnx.from == '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5' && 
        tnx.to == '0x856a1c95bef293de7367b908df2b63ba30fbdd59')){
          type = 'S&E'
      } else if (
      tnx.from == '0xff3dd404afba451328de089424c74685bf0a43c9' || 
      tnx.from == '0xe804f3c3e6dda8159055428848fe6f2a91c2b9af' || 
      tnx.from == '0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0' || 
      tnx.from == '0xa8736b9585a01d6dcc1b6e2fc9dc208552c34b58' ||
      tnx.from == '0x9eca52d3b9ec0cc2f2d62c0dba155952ae6d57d2' || 
      tnx.from == '0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4' || 
      tnx.from == '0x87d7fd8c446cb5d3da3ca23f429e7b7504d1931c' ||
      tnx.from == '0xc223a5ceecd9088c92c76504755507d18913a944' ||
      tnx.from == '0x856a1c95bef293de7367b908df2b63ba30fbdd59'){
        type = 'Buy'
      } else if (tnx.to == '0x10ed43c718714eb63d5aa57b78b54704e256024e' || 
      tnx.to == '0xff3dd404afba451328de089424c74685bf0a43c9' || 
      tnx.to == '0xe804f3c3e6dda8159055428848fe6f2a91c2b9af' || 
      tnx.to == '0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0' ||
      tnx.to == '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3' ||
      tnx.to == '0x9eca52d3b9ec0cc2f2d62c0dba155952ae6d57d2' ||  
      tnx.to == '0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4' ||
      tnx.to == '0x87d7fd8c446cb5d3da3ca23f429e7b7504d1931c' ||
      tnx.to == '0xc223a5ceecd9088c92c76504755507d18913a944' ||
      tnx.to == '0x856a1c95bef293de7367b908df2b63ba30fbdd59') {
        type = 'Sell'
        amount = (amount / 90) * 100
      } else{
        type = 'Transfer'
      }
      var temp = [parseInt(amount), parseFloat(amount * Stats.Price).toFixed(2), tnx.hash, tnx.from, tnx.to, type, new Date(tnx.timeStamp * 1000)]
      arr.push(temp)
      if (response.data.result.length == arr.length || hash == tnx.hash){
        hash = response.data.result[0].hash

        if (arr.length >= 1){
          var conn = mysql.createConnection({
            host     : 'web2.netgiganten.dk',
            user     : 'damibfko_josj',
            password : '7riF@6IYnP9g',
            database : 'damibfko_SafemoonGlubiz',
            multipleStatements: true
          });
          var sql = "INSERT INTO damibfko_SafemoonGlubiz.Volumes (Amount, Value, Hash, Sender, Receiver, Type, createdAt) VALUES ?";

          conn.query(sql, [arr], async function(err) {
              if (err) throw err;
              conn.end()
          })
          arr = []
          break;
        }
      }
    }
  })
  .catch(async err => {
    console.log(err)
  });
}

const VolumeCleaner = () => {
  sequelize.query('DELETE FROM damibfko_SafemoonGlubiz.Volumes WHERE createdAt < now() - interval 48 hour;', {type: sequelize.QueryTypes.DELETE})
  .catch(err => {
    console.log(err)
  })
}

setInterval(VolumeCleaner, 15000)

setInterval(Volume, 15000)

module.exports = Volume();
