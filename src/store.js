import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk), composeWithDevTools()))

const persist = persistStore(store)

export { store, persist }