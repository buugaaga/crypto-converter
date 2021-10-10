import axios from 'axios'

const BINANCE_URL = 'https://api.binance.com'

export const makeRequestToBinance = (pair) => {
  return axios
    .get(`${BINANCE_URL}/api/v3/ticker/price?symbol=${pair}`)

}