var express = require('express');
var router = express.Router();

const handler = require('../handlers/users');

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

module.exports = router;