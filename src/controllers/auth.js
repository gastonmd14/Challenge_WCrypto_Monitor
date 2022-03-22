var express = require('express');
var router = express.Router();

const handler = require('../handlers/users');
const createToken = require('../utils/createToken')

router.post('/login', async (req, res, next) => {
    try {
        const user = req.body;
        const result = await handler.findUser(user);
        if (result) {
            const token = await createToken(result);
            res.status(200).json({token: token, message: 'Login Succesfull'});
        } else {
            res.status(400).json('Username or Password Failed');
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
            const token = await createToken(result);
            res.status(200).json({token: token, message: 'User Create Succesfull'});
        } else {
            res.status(400).json('User Creation Failed');
        }        
    } catch (err) {
        res.status(500).json({'message': err});
    }
});

module.exports = router;