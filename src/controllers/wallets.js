var express = require('express');
var router = express.Router();

const handler = require('../handlers/wallets');

router.get('', (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(500).json({'message': err});
    }
});

router.post('/coins', async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const coin = req.body;
        const result = await handler.createCoin(userId, coin);
        if(result) {
            res.status(200).json({user: result, message: 'Coin added Succesfull to Wallet'});
        } else {
            res.status(404).json({message: 'Fail to add Coin to Wallet'});
        }
    } catch (err) {
        res.status(500).json({'message': err});
    }
});

module.exports = router;