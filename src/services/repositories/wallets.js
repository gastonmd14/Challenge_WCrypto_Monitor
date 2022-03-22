const { Wallet } = require('../../models');

const getCoinById = async coinId => {
    try {
        const coin = coinId;
        const result = await Wallet.findByPk({
            where: {
                
            }
        });
        return result;
    } catch (err) {
        console.log(err);
    }
};

const storeCoin = async coin => {
    try {
        const result = await Wallet.create(coin);
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getCoinById,
    storeCoin
};