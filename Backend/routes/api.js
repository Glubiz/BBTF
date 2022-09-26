const path = require('path');

const express = require('express');

const Controller = require('../controllers/api');

const router = express.Router();

//Pages
router.post('/api/getHoldersSummary', Controller.getHoldersSummary);

router.post('/api/getHolderBracket', Controller.getHolderBracket);


router.post('/api/getData', Controller.getData);

router.post('/api/getWhales', Controller.getWhales);

router.post('/api/getSupply', Controller.getSupply);

router.post('/api/WalletBalance', Controller.getWalletBalance);
router.post('/api/CombinedPositions', Controller.CombinedPosition);

router.post('/api/HolderData', Controller.HolderData);
router.post('/api/HolderTransactions', Controller.HolderTransactions);

router.post('/api/getTransactions', Controller.getTransactions);

router.post('/api/FetchHolders', Controller.fetchHolders);

// router.post('api/getTransactionDistribution', Controller.getTransactionDistribution);

router.post('/api/PaginatedHolders', Controller.paginatedHolders);

router.post('/api/Tracker', Controller.getTracker);
router.post('/api/Prices', Controller.getPrices);


module.exports = router;

//localhost:3033/api/Tracker/0xe1526cf30633a46aba1a828e856f515d26b8c7f8