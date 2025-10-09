import { createSlice } from '@reduxjs/toolkit';

const initial = { base: 'USD', current: 'USD' };

const currencySlice = createSlice({
    name: 'currency',
    initialState: initial,
    reducers: {
        setCurrency(state, action) {
            state.current = action.payload;
        },
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;