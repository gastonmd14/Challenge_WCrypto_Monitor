var express = require('express');
var router = express.Router();

const { coinMarkets } = require('../utils/coinGekco');

router.get('/markets', async (req, res, next) => {
    try {
        const coinData = await coinMarkets();
        if (coinData) res.status(coinData.status).json(coinData.data); 
    } catch (error) {
        res.status(error.response.status).json(response.data);
    }
});

module.exports = router;