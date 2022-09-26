const Whales = require('../models/whaleTracker');
const contracts = require('../util/contracts');

var contract
// var Holders

if (contracts.SafemoonV2){
    contract = contracts.SafemoonV2
  } else {
    contract = contracts.Safemoon
  }

function loader() {
    Whales.findAll({order: [
        ['createdAt', 'DESC']
    ], limit: 100})
    .then(async holders => {
        var j = 1
        for (let holder of holders) {
            await new Promise((resolve => setTimeout(resolve,10000)))
            require('axios')
            .post("https://bscscan.com/token/" + contract + "?a=" + holder.Adress)
            .then(response => {
                console.log(holder.Adress)
            })
        }
    })
    .catch(error => {console.log(error)});
}
loader()
setInterval(loader, 3600000)

// module.exports = loader();