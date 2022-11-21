import { configureStore } from "@reduxjs/toolkit";

import miniCartSlice from "./miniCartSlice/miniCartSlice";
import cartSlice from "./cartSlice/cartSlice";
import currenciesSlice from "./currenciesSlice/currenciesSlice";
import productsSlice from "./productsSlice/productsSlice";

const store = configureStore({
  reducer: {
    miniCart: miniCartSlice.reducer,
    cart: cartSlice.reducer,
    currencies: currenciesSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
