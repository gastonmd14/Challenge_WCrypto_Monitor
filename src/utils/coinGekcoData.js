const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const listCoins = async() => {
    const data = await CoinGeckoClient.coins.list();
    return data;
};

const listAllCoins = async() => {
    const data = await CoinGeckoClient.coins.all();
    return data;
};

const coinsMarkets = async() => {
    const data = await CoinGeckoClient.coins.markets();
    return data;
};

module.exports = {
    listCoins,
    listAllCoins,
    coinsMarkets
}