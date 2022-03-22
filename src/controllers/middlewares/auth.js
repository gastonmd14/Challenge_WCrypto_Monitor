var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../../utils/keyToken');
const handler = require('../../handlers/users')

router.use(async (req, res, next) => {
    
    const id = req.path.split('/')[1];

    const foundUser = await handler.findUserId(id);

    if(foundUser) {

        const receivedToken = req.headers['authorization'];

        if(!receivedToken) res.status(403).json({message: 'Token Not Found'});

        token = receivedToken.split(' ')[1];

        jwt.verify(token, key.key, (err, decoded) => {

            if(err || !(decoded.userName === foundUser.userName)) {
                
                if(err == null) {

                    return res.status(401).json({message: 'User Path no valid for this Token'});

                } else {

                    return res.status(500).json({message: err});

                }
                
            } else {

                req.decoded = decoded;

                next();
            }

        })
    
    } else {

        return res.status(404).json({message: 'User Not Found'});

    }

    
});

module.exports = router;