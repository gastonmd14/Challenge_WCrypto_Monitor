const axios = require('axios').default;


const coinMarkets = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
      data: {}
    })
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  };
};

module.exports = {
    coinMarkets
}