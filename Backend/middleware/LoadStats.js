const sequelize = require('../util/db')
const { Op } = require("sequelize");
const {LP} = require('./LPWatch')

const TotalSupply = 1000000000000
const Whales = require('../models/whaleTracker')
const TotalHoldersDB = require('../models/totalHolders')
const apikey = "5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ"

const Stat = require('../models/stat')

var firstRun = true
var tempContractSupply = 0
var Stats = {
    Price : 0.0001,
    PriceChange : 0,
    PriceChangePercent : 0,
    Volume : 0,
    VolumeChange : 0,
    VolumeChangePercent : 0,
    MarketCap : 0,
    MarketCapChange : 0,
    MarketCapChangePercent : 0,
    TotalHolders: 0,
    Holders : 0,
    HoldersChange : 0,
    HoldersChangePercent : 0,
    Supply : 0,
    SupplyChange : 0,
    SupplyChangePercent : 0,
    CSupply : 0,
    Burned : 0,
    BurnedChange : 0,
    BurnChangePercent : 0,
    Deployer : 0,
    DeployerChange : 0,
    DeployerChangePercent : 0,
    Swap : 0,
    SwapChange : 0,
    SwapChangePercent : 0,
    Treasury : 0,
    TreasuryChange : 0,
    TreasuryChangePercent : 0,
    WhaleHoldingsOne : 0,
    WhaleHoldingsOneChange : 0,
    WhaleHoldingsOneChangePercent : 0,
    WhaleHoldingsTwo : 0,
    WhaleHoldingsTwoChange : 0,
    WhaleHoldingsTwoChangePercent : 0,
    WhaleHoldingsThree : 0,
    WhaleHoldingsThreeChange : 0,
    WhaleHoldingsThreeChangePercent : 0,
    PressureBuy : 0,
    PressureSell : 0,
    TokenVolume : 0,
    PressureTokenBuy : 0,
    PressureTokenSell : 0,
    Transfer : 0,
    Contract : 0,
    ContractChange : 0,
    ContractChangePercent : 0,
    SwapAndEvolve : 0,
    SwapAndEvolveAmount : 0,
    BNBPrice : 0,
    LPRatio : 0,
    LPRatioChange : 0,
    LPRatioChangePercent : 0,
    DateT : ""
}

var Legacy = []

function GetSupply(){
    sequelize.query('SELECT Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address = "0x0000000000000000000000000000000000000001" OR Address = "0x678ee23173dce625a90ed651e91ca5138149f590"', {type: sequelize.QueryTypes.SELECT})
    .then(results => {
        for (let result of results) {
            if (result.Address == '0x0000000000000000000000000000000000000001'){
                Stats.Burned = result.Balance
            } else {
                Stats.Deployer = result.Balance
            }
        }
    })
    .then(() => {
        Calculations()
    })
}

function GetHolders(){
    sequelize.query('SELECT COUNT(*) as Holders FROM damibfko_SafemoonGlubiz.TotalHolders', {type: sequelize.QueryTypes.SELECT})
    .then(count => {
        if(count[0].Holders > 0){
            Stats.TotalHolders = count[0].Holders
            Stats.Holders = Stats.TotalHolders.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    })
    .catch(err => {
        console.error(err);
    })
}

function GetPrice(){
    const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    const appKey = '5ZN8R7ZD31NC1JH62VDJPIAEMUFFNEYKYJ'
    const Safemoon = '0x856a1c95bef293de7367b908df2b63ba30fbdd59'
    require('axios')
    .get("https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=" + appKey)
    .then(responseData => {
      var BNBPrice = parseFloat(responseData.data.result.ethusd)
      
      sequelize.query('SELECT * FROM damibfko_SafemoonGlubiz.Volumes WHERE Type = "Buy" ORDER BY createdAt DESC LIMIT 1', {type: sequelize.QueryTypes.SELECT})
        .then(result => {
            require('axios')
            .get("https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" + WBNB + "&address=" + Safemoon + "&page=1&offset=1000&sort=desc&apikey=" + appKey)
            .then(Transactions => {
                var Transaction = Transactions.data.result.filter(t => t.hash === result[0].Hash)
                
                if(Transaction.length > 0) {
                    Transaction = Transaction[0]
                    Transaction.value = parseInt(Transaction.value)
                    Transaction.tokenDecimal = parseInt(Transaction.tokenDecimal)
                    var BNB = parseFloat(Transaction.value / (10 ** Transaction.tokenDecimal)).toFixed(2)
                    Stats.Price = parseFloat((BNB * BNBPrice) / result[0].Amount).toFixed(8)
                }
            })
        })
    })
    .catch(err => console.log(err))
}

function GetLegacyData() {
    Stat.findOne({
        where: {
            [Op.and]:[
                {
                    createdAt: {
                        [Op.lte]: new Date().setDate(new Date().getDate() - 1)
                    },
                }
            ]
        },
        order: [
            ['createdAt', 'DESC']
        ]
    })
    .then(result => {
        Legacy = []
        Legacy.push(result)
    })
    .catch(err => {
        console.error(err);
    })
}

function GetVolume() {
    sequelize.query('SELECT SUM(a.Value) as Volume FROM (SELECT Hash, Value, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Buy" OR Type="Sell" GROUP BY Hash) as a WHERE createdAt > now() - interval 24 hour ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
    .then(result => {
        Stats.Volume = result[0].Volume
        sequelize.query('SELECT SUM(a.Value) as Volume FROM (SELECT Hash, Value, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Sell" GROUP BY Hash) as a WHERE createdAt > now() - interval 24 hour ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
        .then(sells => {
            Stats.PressureSell = sells[0].Volume
            sequelize.query('SELECT SUM(a.Value) as Volume FROM (SELECT Hash, Value, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Buy" GROUP BY Hash) as a WHERE createdAt > now() - interval 24 hour ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
            .then(buys => {
                Stats.PressureBuy = buys[0].Volume
            })
            .catch(err => {
                console.error(err);
            })
        })
        .catch(err => {
            console.error(err);
        })
    })
    .catch(err => {
        console.error(err);
    })  
}

function GetTokenVolume() {
    sequelize.query('SELECT SUM(a.Amount) as Volume FROM (SELECT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Buy" OR Type="Sell" GROUP BY Hash) as a WHERE createdAt > now() - interval 24 hour ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
    .then(result => {
        Stats.TokenVolume = result[0].Volume
        sequelize.query('SELECT SUM(a.Amount) as Volume FROM (SELECT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Sell" GROUP BY Hash) as a WHERE createdAt > now() - interval 24 hour ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
        .then(sells => {
            Stats.PressureTokenSell = sells[0].Volume
            sequelize.query('SELECT SUM(a.Amount) as Volume FROM (SELECT Hash, Amount, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE Type="Buy" GROUP BY Hash) as a WHERE createdAt > now() - interval 24 hour ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
            .then(buys => {
                Stats.PressureTokenBuy = buys[0].Volume
            })
            .catch(err => {
                console.error(err);
            })
        })
        .catch(err => {
            console.error(err);
        })
    })
    .catch(err => {
        console.error(err);
    })  
}

function GetTransferVolume() {
    sequelize.query('SELECT SUM(a.Value) as Volume FROM (SELECT Hash, Value, createdAt, Type FROM damibfko_SafemoonGlubiz.Volumes WHERE createdAt > now() - interval 24 hour AND Type="Transfer" GROUP BY Hash) as a ORDER BY createdAt DESC;', {type: sequelize.QueryTypes.SELECT})
    .then(result => {
        Stats.Transfer = result[0].Volume
    })
    .catch(err => {
        console.error(err);
    })
}

function GetLP(){
    Stats.Swap = LP.SwapLP
    Stats.Treasury = LP.SafemoonLP
    Stats.BNBPrice = LP.BNBPrice
}

async function Calculations(){
    GetLegacyData()
    await new Promise((resolve => setTimeout(resolve,3000)))
    // console.log(Legacy[0])

    Stats.PriceChange = Stats.Price - Legacy[0].Price
    Stats.VolumeChange = Stats.Volume - Legacy[0].Volume 
    Stats.MarketCapChange = Stats.MarketCap - Legacy[0].MarketCap 
    Stats.HoldersChange = Stats.TotalHolders - Legacy[0].Holders 
    Stats.SupplyChange = Stats.Supply - Legacy[0].Supply 
    Stats.BurnedChange = Stats.Burned - Legacy[0].Burn 
    Stats.DeployerChange = Stats.Deployer - Legacy[0].Deployer 
    Stats.SwapChange = Stats.Swap - Legacy[0].Swap 
    Stats.TreasuryChange = Stats.Treasury - Legacy[0].Treasury 
    Stats.WhaleHoldingsOneChange = Stats.WhaleHoldingsOne - Legacy[0].WhaleHoldingsOne 
    Stats.WhaleHoldingsTwoChange = Stats.WhaleHoldingsTwo - Legacy[0].WhaleHoldingsTwo 
    Stats.WhaleHoldingsThreeChange = Stats.WhaleHoldingsThree - Legacy[0].WhaleHoldingsThree 
    Stats.ContractChange = Stats.Contract - Legacy[0].Contract
    Stats.LPRatioChange = Stats.LPRatio - Legacy[0].LPRatio


    Stats.PriceChangePercent = (Stats.PriceChange / Legacy[0].Price) * 100
    Stats.VolumeChangePercent = (Stats.VolumeChange / Legacy[0].Volume) * 100 
    Stats.MarketCapChangePercent = (Stats.MarketCapChange / Legacy[0].MarketCap) * 100 
    Stats.HoldersChangePercent = (Stats.HoldersChange / Legacy[0].Holders) * 100
    Stats.SupplyChangePercent = (Stats.SupplyChange / Legacy[0].Supply) * 100 
    Stats.BurnChangePercent = (Stats.BurnedChange / Legacy[0].Burn) * 100
    Stats.DeployerChangePercent = (Stats.DeployerChange / Legacy[0].Deployer) * 100
    Stats.SwapChangePercent = (Stats.SwapChange / Legacy[0].Swap) * 100
    Stats.TreasuryChangePercent = (Stats.TreasuryChange / Legacy[0].Treasury) * 100
    Stats.WhaleHoldingsOneChangePercent = (Stats.WhaleHoldingsOneChange / Legacy[0].WhaleHoldingsOne) * 100
    Stats.WhaleHoldingsTwoChangePercent = (Stats.WhaleHoldingsTwoChange / Legacy[0].WhaleHoldingsTwo) * 100 
    Stats.WhaleHoldingsThreeChangePercent = (Stats.WhaleHoldingsThreeChange / Legacy[0].WhaleHoldingsThree) * 100
    Stats.ContractChangePercent = (Stats.ContractChange / Legacy[0].Contract) * 100
    Stats.LPRatioChangePercent = (Stats.LPRatioChange / Legacy[0].LPRatio) * 100

    Stats.Supply = TotalSupply - (Stats.Burned + Stats.Deployer)
    sequelize.query('SELECT SUM(Balance) as Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Address = "0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012" OR Address = "0xd82a68f681aaaf8bbb4510004414fc6ad8b59f43" OR Address = "0xedcd158a33dbbe23668dad971bf7d287cd6212c1" OR Address = "0x2d45e87593b23fcbd29b4f1583bd1638dceef8c7" OR Address = "0x0ed1d49e0fab006b7718758a402f31561c8a308a" OR Address = "0x9c05528edf8ae8ebc3806ddddea5c4a8031ce6d0" OR Address = "0xaf25d6494a341675186f975c4cbc081fdac05dbc" OR Address = "0xa52f44fda05cf4e98be9f16a52978696296a4ca2" OR Address = "0x4834c08f5aaab44c8bdeddc386eca4029e3c6c40" OR Address = "0x3948392c35fabb910d6ebe222b570fb52bf0844a" OR Address = "0x17f18488f39f9eb5610d9360e85cb8f047f6bb03" OR Address = "0x468fc54b82b590d1698251d2bce1a9f91c43f042" OR Address = "0x4a84095bb9f3f089d8b061b61f406951b991b0f2" OR Address = "0x64d4bd9daa81a8fee38b2b2139fcc7a2168bcc41" OR Address = "0x7e4665a95f5fb6ee852dd6f6f88b1a661e495426" OR Address = "0x74ce0802393859f39d588a55cc05ad2078a15239" OR Address = "0x26fdf3850c213c0cd60c14be7eded4b8d628259c" OR Address = "0xd067d936ec055fad1b20b3519ee4bfd84cdea5bf" OR Address = "0x6d38c6f83e336eb8d3a5a9f91908bdbb0accee87" OR Address = "0xbcc3e09281de214426a65d7f90c6a91135d9d300" OR Address = "0x7d153acd66f3c5a41bcc01fafdbc0bee5bfa33f3" OR Address = "0x43a15068b9448caf20f68e34ae03c62a26eb9bab" OR Address = "0xb47b0ff5f9a39e01897e97fe05c6cf3208c3ffaf" OR Address = "0x638cc5f375b90256f91882eacb407830e4271cbf" OR Address = "0x043bbe6be484a9853a18b4b92b6baec7604514f0" OR Address = "0xa5e2ee9ded07176d0ff1687b7247ea0fc9b468a4" OR Address = "0x93a066935950ee2fb5441f42a27fb9f03fab1a2e" OR Address = "0x1aef6ca9373295ba28575291aa4dd6d1c0634bef" OR Address = "0x37bb363e93075ba3bc9f501b79596071242f6dba" OR Address = "0xc0bc4feedc5c77bd11ee89ce2093fcfc4069ad66" OR Address = "0x813cbc2d8c7e17e62cb74417a3ccf0621ef7a273" OR Address = "0x0211f3cedbef3143223d3acf0e589747933e8527" OR Address = "0xf27da5569ea978561a83846bbdfdff7ee5d383fc" OR Address = "0x4982085c9e2f89f2ecb8131eca71afad896e89cb" OR Address = "0x4982085C9e2F89F2eCb8131Eca71aFAD896e89CB" OR Address = "0x24f361e1eeedf29fd6d724c9393132d61c51ebb1" OR Address = "0x9e3bc4ade1c314b542b8463154d968e719f678eb" OR Address = "0x05f0fdd0e49a5225011fff92ad85cc68e1d1f08e" OR Address = "0x4c029b233e27ea409d4349304f4623029f6e50a2" OR Address = "0x2c6cc8e98adc0b3f3505c29d63fcdd76ac0e2ba4" OR Address = "0x87067ddcfddf4c6790207132848cfbbe5cd6f939" OR Address = "0x3fdf750fb555583374b26a5ff476abbd7f6e6fb5" OR Address = "0xf21996a30a7b37672429cdb8c917cb410bd6009d" OR Address = "0x868f027a5e3bd1cd29606a6681c3ddb7d3dd9b67" OR Address = "0xc7029e939075f48fa2d5953381660c7d01570171" OR Address = "0x391c9d82af4edd7d3ec23cefabf9a35b630b3a7a" OR Address = "0x4a78ef1bd3f6cb859052915a59782cfa14c47a58" OR Address = "0x3a723e58c4808dde4591543282adc7d6b378715b" OR Address = "0x7c0a011258c949e8036fae45c10ba0af75c39c0a" OR Address = "0x8af8f4df5c463db7ab24ec66cee7546c9a310f56" OR Address = "0x7d7fc48fc930552957dc585726d9628f5319c038" OR Address = "0x33eac50b7faf4b8842a621d0475335693f5d21fe" OR Address = "0x0d0707963952f2fba59dd06f2b425ace40b492fe" OR Address = "0xd11616e66b128c0b756b91cc13466defaae67d07" OR Address = "0x328130164d0f2b9d7a52edc73b3632e713ff0ec6" OR Address = "0x6fd39ee743fa95c717deb045e66d79bea95452b3" OR Address = "0x12559b3ee73081620d4c4c09e44c37c7e3a69afc" OR Address = "0x45c3c3314a2c721a9ee30bd1c1c809176749e641" OR Address = "0x81e6cd83723243ea2976541c6a00c2065174110d" OR Address = "0xa7f84f12586055f5ec7fe5a17ff1e7cf697fd6f7" OR Address = "0x5e22f6e0782394506abcbbc8489abd59115e3e77" OR Address = "0xefeCD68F9549D47cBECA0A2Fd9bd09CF4eC6a5D6" OR Address = "0xefecd68f9549d47cbeca0a2fd9bd09cf4ec6a5d6" OR Address = "0xc223a5ceecd9088c92c76504755507d18913a944" OR Address = "0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4" OR Address = "0x678ee23173dce625a90ed651e91ca5138149f590" OR Address = "0x0000000000000000000000000000000000000001"', {type: sequelize.QueryTypes.SELECT})
    .then(result => {
        Stats.CSupply = TotalSupply - result[0].Balance
    })
    Stats.MarketCap = Stats.Price * Stats.Supply

}

function GetWhales(){
    sequelize.query('SELECT SUM(a.Amount) as Balance FROM (SELECT * FROM damibfko_SafemoonGlubiz.Whales ORDER BY Amount DESC LIMIT 10) a', {type: sequelize.QueryTypes.SELECT})
    .then(One => {
        Stats.WhaleHoldingsOne = One[0].Balance
    })

    sequelize.query('SELECT SUM(a.Amount) as Balance FROM (SELECT * FROM damibfko_SafemoonGlubiz.Whales ORDER BY Amount DESC LIMIT 25) a', {type: sequelize.QueryTypes.SELECT})
    .then(Two => {
        Stats.WhaleHoldingsTwo = Two[0].Balance
    })

    sequelize.query('SELECT SUM(a.Amount) as Balance FROM (SELECT * FROM damibfko_SafemoonGlubiz.Whales ORDER BY Amount DESC LIMIT 100) a', {type: sequelize.QueryTypes.SELECT})
    .then(Three => {
        Stats.WhaleHoldingsThree = Three[0].Balance
    })
}

function GetContractSupply(){
    if(Stats.SwapAndEvolve == 0){
        Stat.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 10
        })
        .then(result => {
          for(let data of result){
              if(data.SwapAndEvolve > 0){
                Stats.SwapAndEvolve = data.SwapAndEvolve
                Stats.SwapAndEvolveAmount = data.SwapAndEvolveAmount
                break
              }
          }
        })
    }
    require('axios')
    .get('https://api.bscscan.com/api?module=account&action=balance&address=0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5&apikey=' + apikey)
    .then(Supply => {
        if(Supply){
            Stats.Contract = parseFloat(Supply.data.result / 1000000000000000000).toFixed(3)
            if(parseFloat(tempContractSupply) > parseFloat(Stats.Contract)){
                Stats.SwapAndEvolve += 1
                Stats.SwapAndEvolveAmount += 66.16
            }
            tempContractSupply = Stats.Contract
        }
    })
}

function GetLPRatio() {
    TotalHoldersDB.findOne({
        where: {
            Address: '0x856a1c95bef293de7367b908df2b63ba30fbdd59'
        }
    })
    .then(LP => {
        Stats.LPRatio = (Stats.Supply - LP.Balance) / LP.Balance
    })
}

async function Collect(){
    if (firstRun){
        await new Promise((resolve => setTimeout(resolve,5000)))
        firstRun = false
    }

    GetSupply()
    GetHolders()
    GetPrice()
    GetVolume()
    GetTokenVolume()
    GetTransferVolume()
    GetLP()
    Calculations()
    GetWhales()
    GetContractSupply()
    GetLPRatio()
    Stats.DateT = new Date()
    console.log(Stats)
}

Collect()
setInterval(Collect, 60000)

module.exports = {Stats}