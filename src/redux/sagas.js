import { takeEvery } from "@redux-saga/core/effects";
import { call, put } from 'redux-saga/effects'
import { setPrice, requestCoinsError, setCurrencies } from "./actionCreators";
import { ACTION_TYPES } from "../constants";
import { makeRequestToBinance } from "../agent";

export function* watchFetchCoins() {
  yield takeEvery(ACTION_TYPES.FETCH_COINS, fetchCoinsSaga)
}

export function* fetchCoinsSaga(action) {
  const { cur1, cur2 } = action.payload
  yield put(setCurrencies(action.payload))
  localStorage.setItem('cur1', cur1)
  localStorage.setItem('cur2', cur2)

  if (cur1 === cur2) {
    yield put(setPrice(1))
    return
  }
  try {
    const response = yield call(() => makeRequestToBinance(`${cur1}${cur2}`))
    yield put(setPrice(response.data.price.toFixed(5)))
    return
  } catch (e) {
    try {
      const otherResponse = yield call(() => makeRequestToBinance(`${cur2}${cur1}`))
      const price = 1 / otherResponse.data.price
      yield put(setPrice(price.toFixed(5)))
      return
    } catch (err) {
      yield put(requestCoinsError())
    }
  }
}