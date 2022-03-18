const { userModel } = require('../../models/user');

const find = async (user) => {
    try {
        const userToFind = user;
        const result = await userModel.findOne(userToCreate);
        return result;
    } catch (e) {
        console.log('Error: ', e);
    }
};


module.exports = {
    find
};