import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementItem: (state, action) => {
            const item = state.items.find(item => item.name === action.payload);
            if (item) item.quantity += 1;
        },
        decrementItem: (state, action) => {
            const item = state.items.find(item => item.name === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
    },
});

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
