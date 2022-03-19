const { User } = require('../../models');
const bcrypt = require('bcryptjs');

const getUser = async (user) => {
    try {
        const userToFind = user;
        const result = await User.findOne({
            where: {
                userName: userToFind.userName
            }
        });
        return result;
    } catch (e) {
        console.log('Error: ', e);
    }
};

const storeUser = async (user) => {
    try {
        const userToCreate = user;
        userToCreate.password = bcrypt.hashSync(userToCreate.password, 8);
        const result = await User.create(userToCreate);
        return result;
    } catch (e) {
        console.log('Error: ', e);
    }
}


module.exports = {
    getUser,
    storeUser
};