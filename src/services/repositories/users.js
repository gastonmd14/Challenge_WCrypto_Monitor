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
        if (result) {
            const verifyPassword = bcrypt.compareSync(userToFind.password, result.password);
            if (verifyPassword == true) {
                return result;
            }
        } else {
            return result;
        }
    } catch (err) {
        console.log(err);
    }
};

const getUserById = async (id) => {
    try {
        const userId = id;
        const result = await User.findByPk(userId, {
            attributes: ['id', 'firstName', 'lastName', 'userName']
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};

const storeUser = async (user) => {
    try {
        const userToCreate = user;
        userToCreate.password = bcrypt.hashSync(userToCreate.password, 8);
        const result = await User.create(userToCreate);
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUser,
    getUserById,
    storeUser
};