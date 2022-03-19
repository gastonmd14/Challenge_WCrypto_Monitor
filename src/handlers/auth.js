const repository = require('../services/repositories/auth');

const findUser = async user => await repository.getUserById(user);

const createUser = async user => await repository.storeUser(user);

module.exports = {
    findUser,
    createUser
};