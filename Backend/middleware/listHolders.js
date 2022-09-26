const sequelize = require('./../util/db');
const {Stats} = require('./LoadStats')

const exclude = require('./../util/excluded');

var Thresholds = [
  {SubBrackets: []},{SubBrackets: []},{SubBrackets: []},{SubBrackets: []},{SubBrackets: []},{SubBrackets: []},{SubBrackets: []},{SubBrackets: []},{SubBrackets: []}
]

const ConcatQuery = (Statements) => {
  var sql = ""
  for (let i = 0; i < Statements.length; i++){
    sql += Statements[i]
    i < Statements.length - 1 ? sql += ' UNION ALL ' : ""
  }
  return sql
}

const ConvertBalanceSum = (Value) => {
  if (Value.toString().length > 3 && Value.toString().length < 7){
    Value = parseFloat(Value / 1000).toFixed(2).toString() + " k"
  } else if(Value.toString().length > 6 && Value.toString().length < 10){
    Value = parseFloat(Value / 1000000).toFixed(2).toString() + " m"
  } else if(Value.toString().length > 9){
    Value = parseFloat(Value / 1000000000).toFixed(2).toString() + " b"
  }
  return Value
}

const fetchMain = () => {
  var Statements = [
    //Main Brackets
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 0 AND 499 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 500 AND 999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 1000 AND 9999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 10000 AND 499999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 500000 AND 999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 1000000 AND 9999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 10000000 AND 499999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 500000000 AND 999999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance > 999999999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  console.log(Stats)
  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i]){
        temp = {
          ...Thresholds[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 
const fetchFirstBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 0 AND 99 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 100 AND 199 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 200 AND 299 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 300 AND 399 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 400 AND 499 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i]){
        temp = {
          ...Thresholds[0].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[0].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[0].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchSecondBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 500 AND 599 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 600 AND 699 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 700 AND 799 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 800 AND 899 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 900 AND 999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[1].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[1].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0.00
        }
      }
      Thresholds[1].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchThirdBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 1000 AND 2999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 3000 AND 4999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 5000 AND 6999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 7000 AND 8999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 9000 AND 9999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[2].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[2].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[2].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchFourthBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 10000 AND 99999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 100000 AND 199999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 200000 AND 299999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 300000 AND 399999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 400000 AND 499999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[3].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[3].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[3].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchFifthBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 500000 AND 599999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 600000 AND 699999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 700000 AND 799999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 800000 AND 899999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 900000 AND 999999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[4].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[4].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[4].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchSixthBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 1000000 AND 2999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 3000000 AND 4999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 5000000 AND 6999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 7000000 AND 8999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 9000000 AND 9999999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[5].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[5].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[5].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchSeventhBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 10000000 AND 99999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 100000000 AND 199999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 200000000 AND 299999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 300000000 AND 399999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 400000000 AND 499999999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[6].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[6].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[6].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchEighthBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 500000000 AND 599999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 600000000 AND 699999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 700000000 AND 799999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 800000000 AND 899999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 900000000 AND 999999999 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[7].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[7].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[7].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

const fetchNinethBracket = () => {
  var Statements = [
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 1000000000 AND 2999999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 3000000000 AND 4999999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 5000000000 AND 6999999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance BETWEEN 7000000000 AND 8999999999 AND ADDRESS NOT IN (' + exclude + ')',
    'SELECT Count(Balance) as NumberOfHolders, Sum(Balance) as BalanceSum FROM damibfko_SafemoonGlubiz.TotalHolders WHERE Balance > 9000000000 AND ADDRESS NOT IN (' + exclude + ')',
  ]

  sequelize.query(ConcatQuery(Statements), {type: sequelize.QueryTypes.SELECT})
  .then(results => {
    var temp
    for (let i = 0; i < results.length; i++) {
      if(results[i].BalanceSum){
        temp = {
          ...Thresholds[8].SubBrackets[i],
          NumberOfHolders : results[i].NumberOfHolders,
          PercentageOfHolders : parseFloat((results[i].NumberOfHolders / Stats.TotalHolders) * 100).toFixed(2), 
          BalanceSum : ConvertBalanceSum(results[i].BalanceSum),
          PercentageOfSupply : parseFloat((results[i].BalanceSum / Stats.CSupply) * 100).toFixed(2)
        }
      } else {
        temp = {
          ...Thresholds[8].SubBrackets[i],
          NumberOfHolders : 0,
          PercentageOfHolders : 0, 
          BalanceSum : 0,
          PercentageOfSupply : 0
        }
      }
      Thresholds[8].SubBrackets[i] = temp
    }
  })
  .catch(err => {
    console.error(err);
  })
} 

async function fetch(){
  fetchMain()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchFirstBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchSecondBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchThirdBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchFourthBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchFifthBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchSixthBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchSeventhBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchEighthBracket()
  await new Promise((resolve => setTimeout(resolve,2000)))
  fetchNinethBracket()
  Thresholds.DataT = new Date()
}

fetch()
setInterval(fetch, 120000)

module.exports = {Thresholds};

