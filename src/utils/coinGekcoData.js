const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const listCoins = async() => {
    const data = await CoinGeckoClient.coins.list();
    return data;
};

module.exports = {
    listCoins
}