import { configureStore } from "@reduxjs/toolkit";

import miniCartSlice from "./miniCartSlice/miniCartSlice";
import cartSlice from './cartSlice/cartSlice';
import currenciesSlice from "./currenciesSlice/currenciesSlice";


const store = configureStore({
    reducer: {
        miniCart: miniCartSlice.reducer,
        cart: cartSlice.reducer,
        currencies: currenciesSlice.reducer,
    }
});

export default store;