const { Stats } = require('./LoadStats');
const { Op } = require("sequelize");
const Stat = require('./../models/stat');
var firstRun = true

async function CalculateStats(){
    if (firstRun){
        await new Promise((resolve => setTimeout(resolve,50000)))
        firstRun = false
    }
    Stat.create({
        Price: Stats.Price,
        PriceChange : Stats.PriceChange,
        PriceChangePercent : Stats.PriceChangePercent,
        Volume: Stats.Volume,
        VolumeChange : Stats.VolumeChange,
        VolumeChangePercents : Stats.VolumeChangePercent,
        MarketCap: Stats.MarketCap,
        MarketCapChange : Stats.MarketCapChange,
        MarketCapChangePercent : Stats.MarketCapChangePercent,
        Holders: Stats.TotalHolders,
        HoldersChange : Stats.HoldersChange,
        HoldersChangePercent : Stats.HoldersChangePercent,
        Supply: Stats.Supply,
        SupplyChange : Stats.SupplyChange,
        SupplyChangePercent : Stats.SupplyChangePercent,
        Burn: Stats.Burned,
        BurnChange : Stats.BurnedChange,
        BurnChangePercent : Stats.BurnChangePercent,
        Deployer: Stats.Deployer,
        DeployerChange : Stats.DeployerChange,
        DeployerChangePercent : Stats.DeployerChangePercent,
        Swap: Stats.Swap,
        SwapChange : Stats.SwapChange,
        SwapChangePercent : Stats.SwapChangePercent,
        Treasury: Stats.Treasury,
        TreasuryChange : Stats.TreasuryChange,
        TreasuryChangePercent : Stats.TreasuryChangePercent,

        WhaleHoldingsOne: Stats.WhaleHoldingsOne,
        WhaleHoldingsOneChange : Stats.WhaleHoldingsOneChange,
        WhaleHoldingsOneChangePercent : Stats.WhaleHoldingsOneChangePercent,
        WhaleHoldingsTwo: Stats.WhaleHoldingsTwo,
        WhaleHoldingsTwoChange : Stats.WhaleHoldingsTwoChange,
        WhaleHoldingsTwoChangePercent : Stats.WhaleHoldingsTwoChangePercent,
        WhaleHoldingsThree: Stats.WhaleHoldingsThree,
        WhaleHoldingsThreeChange : Stats.WhaleHoldingsThreeChange,
        WhaleHoldingsThreeChangePercent : Stats.WhaleHoldingsThreeChangePercent,
        
        SwapAndEvolve : Stats.SwapAndEvolve,
        SwapAndEvolveAmount : Stats.SwapAndEvolveAmount,
        LPRatio: Stats.LPRatio,
        LPRatioChange: Stats.LPRatioChange,
        LPRatioChangePercent : Stats.LPRatioChangePercent,
    })
}

// createStats()
setInterval(CalculateStats, 300000)

module.exports = CalculateStats();

