const repository = require('../services/repositories/auth');

const findUser = async user => await repository.find(user);

module.exports = {
    findUser
};