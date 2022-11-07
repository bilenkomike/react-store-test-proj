import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 1,
        total: {

        },
    },
    reducers: {
        addItemToCart: (state, action) =>  {
            console.log(action);
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;