import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reduser";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "@redux-saga/core";
import rootsaga from './redux/sagas/index'

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

const persist = persistStore(store)
sagaMiddleware.run(rootsaga)

export { store, persist }