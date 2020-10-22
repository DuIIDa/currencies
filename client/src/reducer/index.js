import {combineReducers, configureStore} from '@reduxjs/toolkit'
import currenciesSlice from './currenciesSlice'
import loaderSlice from './loaderSlice'

const rootReducer = combineReducers({
    currencies: currenciesSlice,
    loader: loaderSlice
})

export const store = configureStore({
    reducer: rootReducer,
})