const repository = require('../services/repositories/auth');

const findUser = async user => await repository.getUser(user);

const createUser = async user => await repository.storeUser(user);

module.exports = {
    findUser,
    createUser
};