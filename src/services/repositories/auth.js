const { userModel } = require('../../models/user');

const find = async (user) => {
    try {
        const userToFind = user;
        const result = await userModel.findOne(userToFind);
        return result;
    } catch (e) {
        console.log('Error: ', e);
    }
};

const create = async (user) => {
    try {
        const userToCreate = user;
        const result = await userModel.create(userToCreate);
        return result;
    } catch (e) {
        console.log('Error: ', e);
    }
}


module.exports = {
    find,
    create
};