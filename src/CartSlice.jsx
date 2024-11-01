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
        updateQuantity: (state, action) => {
            const { name, amount } = action.payload; // amount can be positive or negative
            const item = state.items.find(item => item.name === name);
            if (item) {
                item.quantity += amount;
                // Ensure quantity does not fall below 1
                if (item.quantity < 1) {
                    item.quantity = 1;
                }
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
    },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
