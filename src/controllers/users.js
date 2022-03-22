var express = require('express');
var router = express.Router();

const handler = require('../handlers/users');
const walletHandler = require('../handlers/wallets');

const allowEndpoints = require('../controllers/middlewares/auth')

router.get('/:id', allowEndpoints, async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await handler.findUserId(id);
        if(result) {
            res.status(200).json({user: result, message: 'User Found'});
        } else {
            res.status(404).json({message: 'User Not Found'});
        }
    } catch (err) {
        res.status(500).json({'message': err});
    }
});

router.post('/:id/coins', allowEndpoints, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const coin = req.body;
        const result = await handler.findUserId(userId);
        if(result) {
            coin.userId = req.params.id;
            console.log(coin, '100');
            const saveCoin = await walletHandler.createCoin(coin);
            if (saveCoin) {
                res.status(200).json({coin: saveCoin, message: 'Coin added Succesfull to Wallet'});
            } else {
                res.status(404).json({message: 'Fail to add Coin to Wallet'});
            }            
        } else {
            res.status(404).json({message: 'User Not Found'});
        }
    } catch (err) {
        res.status(500).json({'message': err});
    }
});

router.get('/:id/coins/:coinid', allowEndpoints, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const coinId = req.params.coinid;
        const result = await handler.findUserId(userId);
        if(result) {
            const findCoin = await walletHandler.findCoinId(coinId);
            if (findCoin) {
                res.status(200).json({coin: saveCoin, message: 'Coin Founded'});
            } else {
                res.status(404).json({message: 'Coin Not Found'});
            }            
        } else {
            res.status(404).json({message: 'User Not Found'});
        }
    } catch (err) {
        res.status(500).json({'message': err});
    }
});

module.exports = router;