const sequelize = require('./../util/db');
const { Op } = require("sequelize");
const Daily = require('../models/daily');
const Holders = require('../models/whaleTracker');
const Wallets = require('../models/wallets');

const exclude = 'ADDRESS !="0x92b1d615aa1511ea24c203ff48b0815800079a88" AND ADDRESS != "0x8c128dba2cb66399341aa877315be1054be75da8" AND ADDRESS != "0xa8736b9585a01d6dcc1b6e2fc9dc208552c34b58" AND ADDRESS != "0xff3dd404afba451328de089424c74685bf0a43c9" AND ADDRESS != "0x79c4af7c43f500b9ccba9396d079cc03dfcafda1" AND ADDRESS != "0x97b85b5cf219f4b3b5259431d4b5835334767e6a" AND ADDRESS != "0xcd198be08a33cbe2172f3be45cdb431e060076bc" AND ADDRESS != "0x9eca52d3b9ec0cc2f2d62c0dba155952ae6d57d2" AND ADDRESS != "0x1f5e3785aa4605908e12f8049f9c12a9f32980bb" AND ADDRESS != "0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0" AND ADDRESS != "0x8076c74c5e3f5852037f31ff0093eeb8c8Add8d3" AND ADDRESS != "0x42981d0bfbaf196529376ee702f2a9eb9092fcb5" AND ADDRESS != "0x87d7fd8c446cb5d3da3ca23f429e7b7504d1931c" AND ADDRESS != "0xf651e909E5d2567072F042cb6A75373e26c89B8b" AND ADDRESS != "0x856a1c95bef293de7367b908df2b63ba30fbdd59" AND ADDRESS != "0x124d9bf2fecbc16b54ec4accdb14d44c2144f012" AND ADDRESS != "0xefecd68f9549d47cbeca0a2fd9bd09cf4ec6a5d6" AND ADDRESS != "0x4982085c9e2f89f2ecb8131eca71afad896e89cb" AND ADDRESS != "0x0d0707963952f2fba59dd06f2b425ace40b492fe" AND ADDRESS != "0xc7029e939075f48fa2d5953381660c7d01570171" AND ADDRESS != "0x33eac50b7faf4b8842a621d0475335693f5d21fe" AND ADDRESS != "0x8FB9BBFd97FfF7bbA69c0162A9632C9503B29CD4" AND ADDRESS != "0xc223A5cEecd9088C92C76504755507D18913A944" AND ADDRESS != "0x328130164d0F2B9D7a52edC73b3632e713ff0ec6" AND ADDRESS != "0x391c9d82af4edd7d3ec23cefabf9a35b630b3a7a" AND ADDRESS != "0xd11616e66b128c0b756b91cc13466defaae67d07" AND ADDRESS != "0x868f027a5e3bd1cd29606a6681c3ddb7d3dd9b67" AND ADDRESS != "0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012" AND ADDRESS != "0x856a1c95bef293de7367b908df2b63ba30fbdd59" AND ADDRESS != "0x489519cf1b56c98a31b212b58df942a35b6921f4" AND ADDRESS != "0xff53c5fe4d9865fe9c6fa4866f1b4647d4125c82"'

var whaleList = []
var Supply = 1000000000000000

async function fetch(){

  whaleList = []
  sequelize.query('SELECT ROW_NUMBER() OVER(ORDER BY Balance desc) AS num_row, Address, Balance FROM damibfko_SafemoonGlubiz.TotalHolders WHERE ' + exclude + ' ORDER BY Balance desc LIMIT 165', {type: sequelize.QueryTypes.SELECT})
  .then(async holders => {
    if (holders.length > 0){
      for (let holder of holders) {
          Address = holder.Address
          Balance = holder.Balance
          Percent = parseFloat((Balance / Supply) * 100).toFixed(3)
          var whale = {Address: Address, Balance: Balance, Percent: Percent}
          whaleList.push(whale);
      }
    }
  })
  .then(finish => {
      dataHandler()
  })
  .then(() => cleanup())
}
async function dataHandler() {
    for (var whale of whaleList){
    await new Promise((resolve => setTimeout(resolve,10000)))

    var halfChange
    var halfChangePercent
    var percentageChangeHalf
    // Ny minus gammel
    var dailyChange
    // change divideret med gammel gange 100
    var dailyChangePercent
    // Ny minus gammel
    var weeklyChange
    // change divideret med gammel gange 100
    var weeklyChangePercent
    // Ny market share minus gammel
    var percentageChange
    // Ny market share minus gammel
    var percentageChangeWeek

    var Address = whale.Address
    var amount = whale.Balance
    var percent = whale.Percent
    if (Address == '0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012' ||
    Address == '0xd82a68f681aaaf8bbb4510004414fc6ad8b59f43' ||
    Address == '0xedcd158a33dbbe23668dad971bf7d287cd6212c1' ||
    Address == '0x2d45e87593b23fcbd29b4f1583bd1638dceef8c7' ||
    Address == '0x0ed1d49e0fab006b7718758a402f31561c8a308a' ||
    Address == '0x9c05528edf8ae8ebc3806ddddea5c4a8031ce6d0' ||
    Address == '0xaf25d6494a341675186f975c4cbc081fdac05dbc' ||
    Address == '0xa52f44fda05cf4e98be9f16a52978696296a4ca2' ||
    Address == '0x4834c08f5aaab44c8bdeddc386eca4029e3c6c40' ||
    Address == '0x3948392c35fabb910d6ebe222b570fb52bf0844a' ||
    Address == '0x17f18488f39f9eb5610d9360e85cb8f047f6bb03' ||
    Address == '0x468fc54b82b590d1698251d2bce1a9f91c43f042' ||
    Address == '0x4a84095bb9f3f089d8b061b61f406951b991b0f2' ||
    Address == '0x64d4bd9daa81a8fee38b2b2139fcc7a2168bcc41' ||
    Address == '0x7e4665a95f5fb6ee852dd6f6f88b1a661e495426' ||
    Address == '0x74ce0802393859f39d588a55cc05ad2078a15239' ||
    Address == '0x26fdf3850c213c0cd60c14be7eded4b8d628259c' ||
    Address == '0xd067d936ec055fad1b20b3519ee4bfd84cdea5bf' ||
    Address == '0x6d38c6f83e336eb8d3a5a9f91908bdbb0accee87' ||
    Address == '0xbcc3e09281de214426a65d7f90c6a91135d9d300' ||
    Address == '0x7d153acd66f3c5a41bcc01fafdbc0bee5bfa33f3' ||
    Address == '0x43a15068b9448caf20f68e34ae03c62a26eb9bab' ||
    Address == '0xb47b0ff5f9a39e01897e97fe05c6cf3208c3ffaf' ||
    Address == '0x638cc5f375b90256f91882eacb407830e4271cbf' ||
    Address == '0x043bbe6be484a9853a18b4b92b6baec7604514f0' ||
    Address == '0xa5e2ee9ded07176d0ff1687b7247ea0fc9b468a4' ||
    Address == '0x93a066935950ee2fb5441f42a27fb9f03fab1a2e' ||
    Address == '0x1aef6ca9373295ba28575291aa4dd6d1c0634bef' ||
    Address == '0x37bb363e93075ba3bc9f501b79596071242f6dba' ||
    Address == '0xc0bc4feedc5c77bd11ee89ce2093fcfc4069ad66' ||
    Address == '0x813cbc2d8c7e17e62cb74417a3ccf0621ef7a273' ||
    Address == '0x0211f3cedbef3143223d3acf0e589747933e8527' ||
    Address == '0xf27da5569ea978561a83846bbdfdff7ee5d383fc' ||
    Address == '0x4982085c9e2f89f2ecb8131eca71afad896e89cb' ||
    Address == '0x4982085C9e2F89F2eCb8131Eca71aFAD896e89CB' ||
    Address == '0x24f361e1eeedf29fd6d724c9393132d61c51ebb1' ||
    Address == '0x9e3bc4ade1c314b542b8463154d968e719f678eb' ||
    Address == '0x05f0fdd0e49a5225011fff92ad85cc68e1d1f08e' ||
    Address == '0x4c029b233e27ea409d4349304f4623029f6e50a2' ||
    Address == '0x2c6cc8e98adc0b3f3505c29d63fcdd76ac0e2ba4' ||
    Address == '0x87067ddcfddf4c6790207132848cfbbe5cd6f939' ||
    Address == '0x3fdf750fb555583374b26a5ff476abbd7f6e6fb5' ||
    Address == '0xf21996a30a7b37672429cdb8c917cb410bd6009d' ||
    Address == '0x868f027a5e3bd1cd29606a6681c3ddb7d3dd9b67' ||
    Address == '0xc7029e939075f48fa2d5953381660c7d01570171' ||
    Address == '0x391c9d82af4edd7d3ec23cefabf9a35b630b3a7a' ||
    Address == '0x4a78ef1bd3f6cb859052915a59782cfa14c47a58' ||
    Address == '0x3a723e58c4808dde4591543282adc7d6b378715b' ||
    Address == '0x7c0a011258c949e8036fae45c10ba0af75c39c0a' ||
    Address == '0x8af8f4df5c463db7ab24ec66cee7546c9a310f56' ||
    Address == '0x7d7fc48fc930552957dc585726d9628f5319c038' ||
    Address == '0x33eac50b7faf4b8842a621d0475335693f5d21fe' ||
    Address == '0x0d0707963952f2fba59dd06f2b425ace40b492fe' ||
    Address == '0xd11616e66b128c0b756b91cc13466defaae67d07' ||
    Address == '0x328130164d0f2b9d7a52edc73b3632e713ff0ec6' ||
    Address == '0x6fd39ee743fa95c717deb045e66d79bea95452b3' ||
    Address == '0x12559b3ee73081620d4c4c09e44c37c7e3a69afc' ||
    Address == '0x45c3c3314a2c721a9ee30bd1c1c809176749e641' ||
    Address == '0x81e6cd83723243ea2976541c6a00c2065174110d' ||
    Address == '0xa7f84f12586055f5ec7fe5a17ff1e7cf697fd6f7' ||
    Address == '0x5e22f6e0782394506abcbbc8489abd59115e3e77' ||
    Address == '0xefeCD68F9549D47cBECA0A2Fd9bd09CF4eC6a5D6' ||
    Address == '0xefecd68f9549d47cbeca0a2fd9bd09cf4ec6a5d6' ||
    Address == '0xc223a5ceecd9088c92c76504755507d18913a944' ||
    Address == '0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4' ||
    Address == '0x678ee23173dce625a90ed651e91ca5138149f590' ||
    Address == '0x0000000000000000000000000000000000000001'){
      await new Promise((resolve => setTimeout(resolve,1200)))
      Wallets.findOne({where: {Adress: Address}})
      .then(result => {
        if (result == null) {
          Wallets.create({
            Adress: Address,
            Amount: amount
          })
        } else {
          Wallets.update({
            Amount: amount
          }, {
          where: {
            Adress: Address
          }
        })
        }
      })
    }
    else {
      Daily.create({
        Adress: Address,
        Amount: amount,
        Percentage: percent
      })
      .then( async (res) => {
          await new Promise((resolve => setTimeout(resolve,1200)))
          var nowHalf = new Date();
          nowHalf.setHours(nowHalf.getHours() - 12)
          Daily.findAll({
            where: {
              [Op.and]:[
                {Adress: Address},
                {createdAt: {[Op.lte]: nowHalf}}
              ]}, 
            order: [
              ['createdAt', 'DESC']
            ], 
            limit: 1
          })
          .then(result => {
            if (result !== null && result.length > 0) {
              halfChange = amount - result[0].Amount
              halfChangePercent = (halfChange / result[0].Amount) * 100;
              percentageChangeHalf = percent - result[0].Percentage
            } else {
              Daily.findOne({
                where: 
                {Adress: Address},
                order: [
                  ['createdAt', 'ASC']
                ]
              })
              .then(result => {
                halfChange = amount - result.Amount
                halfChangePercent = (halfChange / result.Amount) * 100;
                percentageChangeHalf = percent - result.Percentage
              })
            }
          })
          .then( async (res) => {
            await new Promise((resolve => setTimeout(resolve,1200)))
            var rightNow = new Date();
            rightNow.setDate(rightNow.getDate() - 1)
            Daily.findAll({
              where: {
                [Op.and]:[
                  {Adress: Address},
                  {createdAt: {[Op.lte]: rightNow}}
                ]}, 
              order: [
                ['createdAt', 'DESC']
              ], 
              limit: 1
            })
            .then(result => {
              if (result !== null && result.length > 0) {
                dailyChange = amount - result[0].Amount
                dailyChangePercent = (dailyChange / result[0].Amount) * 100;
                percentageChange = percent - result[0].Percentage
              } else {
                Daily.findOne({
                  where: 
                  {Adress: Address},
                  order: [
                    ['createdAt', 'ASC']
                  ]
                })
                .then(result => {
                  dailyChange = amount - result.Amount
                  dailyChangePercent = (dailyChange / result.Amount) * 100;
                  percentageChange = percent - result.Percentage
                })
              }
            })
            .then(async (res) => {
              await new Promise((resolve => setTimeout(resolve,1200)))
              var nowWeek = new Date();
              nowWeek.setDate(nowWeek.getDate() - 7);
              Daily.findAll({
                where: {
                  [Op.and]:[
                    {Adress: Address},
                    {createdAt: {[Op.lte]: nowWeek}}
                  ]}, 
                order: [
                  ['createdAt', 'DESC']
                ], 
                limit: 1
              }).then(result => {
                if (result !== null && result.length > 0) {
                  weeklyChange = amount - result[0].Amount
                  weeklyChangePercent = (weeklyChange / result[0].Amount) * 100;
                  percentageChangeWeek = percent - result[0].Percentage
                } else {
                  Daily.findOne({
                    where: 
                    {Adress: Address},
                    order: [
                      ['createdAt', 'ASC']
                    ]
                  })
                  .then(result => {
                    if (result){
                      weeklyChange = amount - result.Amount
                      weeklyChangePercent = (weeklyChange / result.Amount) * 100;
                      percentageChangeWeek = percent - result.Percentage
                    } else {
                      weeklyChange = amount
                      weeklyChangePercent = 100;
                      percentageChangeWeek = percent
                    }
                  })
                }
              })
              .then(async function (result) {
                await new Promise((resolve => setTimeout(resolve,1200)))
                Holders.findOne({
                  where: 
                  {Adress: Address}
            })
            .then(totalResult => {
              console.log(dailyChange)
                if (totalResult !== null) {
                Holders.update({
                    Amount: amount,
                    Percentage: percent,
                    PercentageHalf: percentageChangeHalf,
                    PercentageDay: percentageChange,
                    PercentageWeek: percentageChangeWeek,
                    ChangeHalf: halfChange,
                    ChangeHalfPercentage: halfChangePercent,
                    Change: dailyChange,
                    ChangePercentage: dailyChangePercent,
                    ChangeWeek: weeklyChange,
                    ChangeWeekPercentage: weeklyChangePercent
                    }, {
                    where: {
                    Adress: Address
                    }
                })
                } else {
                Holders.create({
                    Adress: Address,
                    Amount: amount,
                    Percentage: percent,
                    PercentageHalf: percentageChangeHalf,
                    PercentageDay: percentageChange,
                    PercentageWeek: percentageChangeWeek,
                    ChangeHalf: halfChange,
                    ChangeHalfPercentage: halfChangePercent,
                    Change: dailyChange,
                    ChangePercentage: dailyChangePercent,
                    ChangeWeek: weeklyChange,
                    ChangeWeekPercentage: weeklyChangePercent
                })
                }
            })
            })
        })
        })
    })
    .catch(error => console.log(error))
    }
  }
}

async function cleanup (){
    await new Promise((resolve => setTimeout(resolve,10000)))
    var now = new Date();
    now.setDate(now.getDate() - 7);
    now.setHours(now.getHours() - 1);
    Daily.destroy({
      where: {
        createdAt: {[Op.lt]: now}
      }
    })
    .then(() => {
      var then = new Date();
      then.setHours(then.getHours() - 12);
      Holders.destroy({
        where: {
          [Op.or]:[
            {Adress: '0x0000000000000000000000000000000000000001'},
            {Adress: '0x678ee23173dce625a90ed651e91ca5138149f590'},
            {updatedAt: {[Op.lte]: then}}
          ]}
      })
    })
  }

setInterval(fetch, 1500000)
module.exports = fetch();