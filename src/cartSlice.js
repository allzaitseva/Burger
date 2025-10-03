import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: {} }; // { [id]: { id, qty, priceBase } }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const { id, qty, priceBase } = action.payload;
            const cur = state.items[id];
            state.items[id] = cur ? { ...cur, qty: cur.qty + qty } : { id, qty, priceBase };
        },
        setQty(state, action) {
            const { id, qty } = action.payload;
            if (state.items[id]) state.items[id].qty = qty;
        },
        remove(state, action) {
            delete state.items[action.payload];
        },
        clear(state) {
            state.items = {};
        },
    },
});

export const { add, setQty, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
