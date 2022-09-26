var axios = require('axios')
const CurrenciesDB = require('../models/currencies')


var ExchangeRates = {
    USD: 1,
    EUR: 1,
    CAD: 1,
    GBP: 1,
    AUD: 1,
    NZD: 1,
    DKK: 1
}

const Currencies = () => {
    axios
    .get("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR%2CCAD%2CGBP%2CAUD%2CDKK%2CNZD&apikey=VQFTwmveirouuA7EBij2FStWlEtHIalR")
    .then(result => {
        ExchangeRates.EUR = result.data.quotes.USDEUR
        ExchangeRates.CAD = result.data.quotes.USDCAD
        ExchangeRates.GBP = result.data.quotes.USDGBP
        ExchangeRates.AUD = result.data.quotes.USDAUD
        ExchangeRates.NZD = result.data.quotes.USDNZD
        ExchangeRates.DKK = result.data.quotes.USDDKK
    })
    .catch(error => {
        CurrenciesDB.findAll()
        .then(result => {
            for (let Currency of result){
                if(Currency.Ticker === "USD"){
                    ExchangeRates.USD = Currency.Rate
                } else if (Currency.Ticker === "EUR"){
                    ExchangeRates.EUR = Currency.Rate
                } else if (Currency.Ticker === "CAD"){
                    ExchangeRates.CAD = Currency.Rate
                } else if (Currency.Ticker === "GBP"){
                    ExchangeRates.GBP = Currency.Rate
                } else if (Currency.Ticker === "AUD"){
                    ExchangeRates.AUD = Currency.Rate
                } else if (Currency.Ticker === "NZD"){
                    ExchangeRates.NZD = Currency.Rate
                } else if (Currency.Ticker === "DKK"){
                    ExchangeRates.DKK = Currency.Rate
                }
            }
        })
        .catch(error => console.log(error))
    });
}

setTimeout(Currencies, 10 * 1000)

module.exports = {ExchangeRates};