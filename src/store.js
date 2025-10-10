import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import currencyReducer from './currencySlice';
import { productsApi } from './productsApi';
import { ratesApi } from './ratesApi';
import { loadCart, saveCart } from './utils/localStorage';

const preloadedState = { cart: loadCart() ?? undefined };

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ratesApi.reducerPath]: ratesApi.reducer,
  },
  preloadedState,
  middleware: (getDefault) =>
    getDefault().concat(productsApi.middleware, ratesApi.middleware),
});

let t;
store.subscribe(() => {
  clearTimeout(t);
  t = setTimeout(() => {
    const { cart } = store.getState();
    saveCart(cart);
  }, 200);
});