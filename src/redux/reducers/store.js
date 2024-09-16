import { createStore,applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducers from "./rootReducers"

const persistConfig = {
    key: 'user',
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducers)

export const store = createStore(persistedReducer);
export let Storage = persistStore(store)