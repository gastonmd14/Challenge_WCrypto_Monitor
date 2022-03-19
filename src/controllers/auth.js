var express = require('express');
var router = express.Router();

const handler = require('../handlers/auth')

router.post('/login', async (req, res, next) => {
    try {
        const user = req.body;
        const result = await handler.findUser(user);
        console.log(result, 'User Founded');
    } catch (e) {
        console.log('Error: ', e);
        res.status(404).json('Login Failed');
    }
    res.status(200).json('Login Succesfull');
});

router.post('/register', async (req, res, next) => {
    try {
        const user = req.body;
        const result = await handler.findUser(user);
        console.log(result, 'User Created');
    } catch (e) {
        console.log('Error: ', e);
        res.status(404).json('Register Failed');
    }
});

module.exports = router;