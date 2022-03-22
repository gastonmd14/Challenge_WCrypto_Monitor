const repository = require('../services/repositories/wallets');

const findCoinId = async coinId => await repository.getCoinById(coinId);

const createCoin = async coin => await repository.storeCoin(coin);

module.exports = {
    findCoinId,
    createCoin
};