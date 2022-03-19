var express = require('express');
var router = express.Router();

const handler = require('../handlers/users');

const { listCoins, coinsMarkets } = require('../utils/coinGekcoData')

router.get('/:id', async (req, res, next) => {
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

router.get('/:id/wallet/coins/list', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await handler.findUserId(id);
        if(result) {
            const result = await listCoins();
            res.status(result.code).json(result.data);
        } else {
            res.status(404).json({message: 'User Not Found'});
        }
    } catch (error) {
        res.status(result.code).json(result.data);
    }
});

router.get('/:id/wallet/coins/markets', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await handler.findUserId(id);
        if(result) {
            const result = await coinsMarkets();
            res.status(result.code).json(result.data);
        } else {
            res.status(404).json({message: 'User Not Found'});
        }
    } catch (err) {
        res.status(500).json({'message': err});
    }
})

module.exports = router;