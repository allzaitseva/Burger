import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = (s) => Object.values(s.cart.items);
export const selectCurrency = (s) => s.currency.current;
export const selectRates = (s) =>
    s.ratesApi?.queries?.['getRates(undefined)']?.data;

export const selectCartWithConverted = createSelector(
    [selectCartItems, selectCurrency, selectRates],
    (items, cur, rates) => {
        const rate = (rates && rates[cur]) || 1;
        return items.map((it) => ({
            ...it,
            price: it.priceBase * rate,
            total: it.qty * it.priceBase * rate,
            currency: cur,
        }));
    }
);

export const selectCartTotal = createSelector(
    [selectCartWithConverted],
    (items) => items.reduce((sum, it) => sum + it.total, 0)
);