var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../../utils/keyToken');
const handler = require('../../handlers/users')




router.use(async (req, res, next) => {

    let id = req.path.split('/')[1];
    const foundUser = await handler.findUserId(id);
    console.log(foundUser.userName);

    const receivedToken = req.headers['authorization'];

    if(!receivedToken) res.status(403).json({message: 'Token Not Found'});

    token = receivedToken.split(' ')[1];

    jwt.verify(token, key.key, (err, decoded) => {
        if(err || !(decoded.userName === foundUser.userName)) {
            if(err == null) {
                return res.status(401).json({message: 'User Path no valid for this Token'});
            } else {
                return res.status(401).json({message: err});
            }
            
        } else {
            req.decoded = decoded;
            next();
        }
    })
});

module.exports = router;