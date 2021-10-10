import { ACTION_TYPES } from "../constants"

export const requestCoinsError = () => ({ type: ACTION_TYPES.REQUEST_COINS_FAILED })

export const setPrice = (price) => ({ type: ACTION_TYPES.SET_PRICE, payload: price })

export const setCurrencies = (currencies) => ({ type: ACTION_TYPES.SET_CURRENCY, payload: currencies })

export const fetchCoins = (payload) => ({ type: ACTION_TYPES.FETCH_COINS, payload })
