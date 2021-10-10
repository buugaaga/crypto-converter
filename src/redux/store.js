import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import { watchFetchCoins } from "./sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchCoins)

