const sequelize = require('../util/db')
const Price = require('../models/price')
const removeZeros = 1000000000000000000
const apikey = "5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ"
let price

var LP = {
    SafemoonLP: 0,
    SwapLP : 0,
    BNBPrice: 0
}

async function collectSWAP(BNBPrice) {
    sequelize.query('SELECT Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address = "0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4" OR Address ="0xc223a5ceecd9088c92c76504755507d18913a944" OR Address = "0xa19e1593de6baf66421cb0e85a2f4e1eac4aed08" OR Address = "0x856a1c95bef293de7367b908df2b63ba30fbdd59"', {type: sequelize.QueryTypes.SELECT})
    .then(async swap => {
      var Total = 0
      

        for (let wallet of swap){
            await new Promise((resolve => setTimeout(resolve,1000)))
            Total += wallet.Balance * price
            
            if (wallet.Address != '0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4'){
                require('axios')
                .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=" + wallet.Address.toLowerCase() + "&tag=latest&apikey=" + apikey)
                .then(data => {
                        Total += parseInt(data.data.result / removeZeros)
                    
                })
                .catch(async err => {
                    console.log(err)
                })
            } else {
                await new Promise((resolve => setTimeout(resolve,1000)))
                
                require('axios')
                .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=" + wallet.Address.toLowerCase() + "&tag=latest&apikey=" + apikey)
                .then(data => {
    
                    Total += parseInt((data.data.result / removeZeros) * BNBPrice)
                    
                })
                .catch(async err => {
                    console.log(err)
                })
            }
        }
        await new Promise((resolve => setTimeout(resolve,1000)))

        require('axios')
        .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=" + '0xb3447f142feee8c356965cdb4cc2c74d87abadab'.toLowerCase() + "&tag=latest&apikey=" + apikey)
        .then(data => {
            Total += parseInt(data.data.result / removeZeros)
            
        })
        .catch(async err => {
            console.log(err)
        })
        await new Promise((resolve => setTimeout(resolve,1000)))

        require('axios')
        .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=" + '0xb3447f142feee8c356965cdb4cc2c74d87abadab'.toLowerCase() + "&tag=latest&apikey=" + apikey)
        .then(data => {
            Total += parseInt((data.data.result / removeZeros) * BNBPrice)
        })
        .catch(async err => {
            console.log(err)
        })
        await new Promise((resolve => setTimeout(resolve,15000)))
      
        LP.SwapLP = Total
    })
    .catch(async err => {
        console.log(err)
    })
}

async function collectLP(BNBPrice){
    Total = 0
    sequelize.query('SELECT Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address = "0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012" OR Address = "0x1f5e3785aa4605908e12f8049f9c12a9f32980bb" LIMIT 2', {type: sequelize.QueryTypes.SELECT})
    .then(async safemoon => {
        Total = safemoon[0].Balance * price
        Total += safemoon[1].Balance * price
        
        require('axios')
        .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012&tag=latest&apikey=" + apikey)
        .then(data => {
            Total += parseInt(data.data.result / removeZeros)
        })
        .catch(async err => {
            console.log(err)
        })
        await new Promise((resolve => setTimeout(resolve,1000)))

        require('axios')
        .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x1f5e3785aa4605908e12f8049f9c12a9f32980bb&tag=latest&apikey=" + apikey)
        .then(data => {
            Total += parseInt(data.data.result / removeZeros)
        })
        .catch(async err => {
            console.log(err)
        })
        await new Promise((resolve => setTimeout(resolve,1000)))

        require('axios')
        .get("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012&tag=latest&apikey=" + apikey)
        .then(data => {
            Total += parseInt((data.data.result / removeZeros) * BNBPrice)
        })
        .catch(async err => {
            console.log(err)
        })
        await new Promise((resolve => setTimeout(resolve,1000)))

        require('axios')
        .get("https://api.bscscan.com/api?module=account&action=balance&address=0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012&apikey=" + apikey)
        .then(data => {
            Total += parseInt((data.data.result / removeZeros) * BNBPrice)
        })
        .catch(async err => {
            console.log(err)
        })
        await new Promise((resolve => setTimeout(resolve,15000)))
        LP.SafemoonLP = Total
    })
    .catch(async err => {
        console.log(err)
    })
}

function GetLP() {
    Price.findOne({
        order: [[
            'createdAt', 'desc'
        ]]
    })
     .then(data => {

        price = data.price
    })
    require('axios')
    .get("https://api.coingecko.com/api/v3/simple/price?ids=WBNB&vs_currencies=USD")
    .then(async data => {
        LP.BNBPrice = data.data.wbnb.usd
        await collectSWAP(data.data.wbnb.usd)
        collectLP(data.data.wbnb.usd)
    })
    .catch(err => console.log(err))
}

// GetLP()
setInterval(GetLP, 30000)

module.exports = {LP}