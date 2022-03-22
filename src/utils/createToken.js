const jwt = require('jsonwebtoken');
const key = require('./keyToken');

const createToken = (user) => {
    const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        id: user.id
      };
      const secret = key.key;
      const options = {
        algorithm: 'HS512',
        expiresIn: '12h'
      };
      return jwt.sign(payload, secret, options);
};

module.exports = createToken;