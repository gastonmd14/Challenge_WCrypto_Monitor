var express = require('express');
var router = express.Router();

const handler = require('../handlers/auth')

router.post('/login', async (req, res, next) => {
    try {
        const user = req.body;
        const result = await handler.findUser(user);
        if (result) {
            res.status(200).json('Login Succesfull');
        } else {
            res.status(400).json('Login Failed');
        }
        
    } catch (err) {
        res.status(500).json({'message': err});
    }
    
});

router.post('/register', async (req, res, next) => {
    try {
        const user = req.body;
        const verifyUsername = await handler.findUser(user);
        if (!verifyUsername) {
            const result = await handler.createUser(user);
            res.status(200).json('User Created');
        } else {
            res.status(400).json('User Creation Failed');
        }
        
    } catch (err) {
        res.status(500).json({'message': err});
    }
});

module.exports = router;