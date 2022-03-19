const repository = require('../services/repositories/users');

const findUser = async user => await repository.getUser(user);

const findUserId = async id => await repository.getUserById(id);

const createUser = async user => await repository.storeUser(user);

module.exports = {
    findUser,
    findUserId,
    createUser
};