var express = require('express');
var router = express.Router();

const { listCoins } = require('../utils/coinGekcoData')

router.get('/list', async (req, res, next) => {
    try {
        const result = await listCoins();
        res.status(result.code).json(result.data);
    } catch (error) {
        res.status(result.code).json(result.data);
    }
});

module.exports = router;