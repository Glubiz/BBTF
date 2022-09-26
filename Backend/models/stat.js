const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Data = sequelize.define('Data', {
  Price: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  PriceChange: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  PriceChangePercent: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Volume: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  VolumeChange : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  VolumeChangePercents: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  MarketCap : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  MarketCapChange: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  MarketCapChangePercent: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Holders: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  HoldersChange: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  HoldersChangePercent: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Supply : {
    type: Sequelize.BIGINT,
    allowNull: true
    },
  SupplyChange : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  SupplyChangePercent: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Burn : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  BurnChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  BurnChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Deployer : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  DeployerChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  DeployerChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Swap : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  SwapChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  SwapChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  Treasury : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  TreasuryChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  TreasuryChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  WhaleHoldingsOne : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  WhaleHoldingsOneChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  WhaleHoldingsOneChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  WhaleHoldingsTwo : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  WhaleHoldingsTwoChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  WhaleHoldingsTwoChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  WhaleHoldingsThree : {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  WhaleHoldingsThreeChange:{
    type: Sequelize.BIGINT,
    allowNull: true
  },
  WhaleHoldingsThreeChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  SwapAndEvolve : {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  SwapAndEvolveAmount : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  LPRatio : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  LPRatioChange : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  LPRatioChangePercent : {
    type: Sequelize.FLOAT,
    allowNull: true
  },
});

module.exports = Data;