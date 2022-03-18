var express = require('express');
var router = express.Router();

const handler = require('../handlers/auth')

router.get('/auth/users', () => {
    try {
        const user = req.body;
        const result = handler.findUser(user);
        console.log(result, 'User Found');
    } catch (e) {
        console.log('Error: ', e);
    }
})

module.exports = router;