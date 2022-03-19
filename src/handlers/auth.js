const repository = require('../services/repositories/auth');

const findUser = async user => await repository.find(user);

const createUser = async user => await repository.create(user);

module.exports = {
    findUser,
    createUser
};