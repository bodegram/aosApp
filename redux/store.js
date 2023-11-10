import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist' 
//import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import appSlice from './slices/appSlice'

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    app: appSlice.reducer
})

const persistConfig = {
    key: 'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  
})

const persistor = persistStore(store)

export {store, persistor}