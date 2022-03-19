const jwt = require('jsonwebtoken');
const key = require('./keyToken');

const createToken = (user) => {
    const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName
      };
      const secret = key.key;
      const options = {};
      return jwt.sign(payload, secret, options);
};

module.exports = createToken;