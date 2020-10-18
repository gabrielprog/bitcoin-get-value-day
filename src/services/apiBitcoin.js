import axios from 'axios';

const apiBitcoin = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi/currentprice.json'
});

export default apiBitcoin;