import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    items: []
};

const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart(state, action) { state.isOpen = action.payload ?? !state.isOpen; },
        addItem(state, { payload }) {
            const { id, title, price, img } = payload;
            const found = state.items.find(i => i.id === id);
            if (found) found.qty += 1;
            else state.items.push({ id, title, price: Number(price), img, qty: 1 });
        },
        inc(state, { payload: id }) { const it = state.items.find(i => i.id === id); if (it) it.qty++; },
        dec(state, { payload: id }) {
            const it = state.items.find(i => i.id === id);
            if (!it) return;
            it.qty--;
            if (it.qty <= 0) state.items = state.items.filter(i => i.id !== id);
        },
        removeItem(state, { payload: id }) {
            state.items = state.items.filter(i => i.id !== id);
        },
        clear(state) { state.items = []; }
    }
});

export const { toggleCart, addItem, inc, dec, removeItem, clear } = slice.actions;
export default slice.reducer;

// selectors
export const selectCart = s => s.cart;
export const selectCartItems = createSelector(selectCart, c => c.items);
export const selectCartOpen = createSelector(selectCart, c => c.isOpen);
export const selectTotalEur = createSelector(selectCartItems,
    items => items.reduce((sum, i) => sum + i.price * i.qty, 0)
);