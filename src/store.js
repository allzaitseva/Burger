import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import currencyReducer from './currencySlice';
import { productsApi } from './productsApi';
import { ratesApi } from './ratesApi';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        currency: currencyReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ratesApi.reducerPath]: ratesApi.reducer,
    },
    middleware: (getDefault) =>
        getDefault().concat(productsApi.middleware, ratesApi.middleware),
});
