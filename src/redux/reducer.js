import { ACTION_TYPES } from '../constants'
import { CURRENCIES } from '../constants'

const initialState = {
  coins: [],
  price: 0,
  cur1: CURRENCIES.USDT,
  cur2: CURRENCIES.BTC,
  error: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ACTION_TYPES.REQUEST_COINS:
    //   return {
    //     ...state,
    //   };
    case ACTION_TYPES.SET_PRICE:
      return {
        ...state,
        error: false,
        price: action.payload
      }
    case ACTION_TYPES.SET_CURRENCY:
      return {
        ...state,
        error: false,
        cur1: action.payload.cur1,
        cur2: action.payload.cur2
      }
    case ACTION_TYPES.REQUEST_COINS_FAILED:
      return {
        ...state,
        error: true,
      }
    default:
      return {
        ...state,
        error: false,
      }
  }
}