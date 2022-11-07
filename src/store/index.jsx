import { configureStore } from "@reduxjs/toolkit";

import miniCartSlice from "./miniCartSlice/miniCartSlice";
import cartSlice from './cartSlice/cartSlice';

const store = configureStore({
    reducer: {
        miniCart: miniCartSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;