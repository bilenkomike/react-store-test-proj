import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (category = "") => {
    const query = `query {
    categories {
   name,products {
     id, name,inStock,brand, 
     gallery, description, category, 
     attributes{id,name,type,
       items{displayValue,value,id}},
     prices{currency{symbol},amount}
   }
 }
}
 `;
    const response = await axios.post("http://localhost:4000", { query });

    let data = await response.data.data.categories;

    return { data, category };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
    selectedCategory: null,
    categories: [],
    selectedProds: [],
    product: {},
    cartProds: [],
  },
  reducers: {
    getProductsByCategory: (state, action) => {
      if (state.products.length > 0) {
        if (!!action.payload) {
          state.selectedProds = state.products.find(
            (category) => category.name === action.payload
          ).products;
          state.selectedCategory = action.payload;
        } else {
          state.selectedProds = state.products[0].products;
          state.selectedCategory = state.products[0].name;
        }
      }
    },
    getProduct: (state, action) => {
      state.isLoading = true;
      state.product = state.products[0].products.find(
        (product) => product.id === action.payload
      );
      // state.isLoading = false;
    },
    getProductsForCart: (state, action) => {
      state.isLoading = true;
      let cartObjs = [];
      action.payload.map((id) =>
        cartObjs.push(state.products[0].products.find((item) => item.id === id))
      );
      state.cartProds = cartObjs;
      // state.isLoading = false;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data;
      if (state.categories.length === 0) {
        action.payload.data.map((category) => {
          state.categories.push(category.name);
          return category;
        });
        if (!state.selectedCategory && !action.payload.category) {
          state.selectedCategory = action.payload.data[0].name;
          state.selectedProds = action.payload.data[0].products;
        } else {
          state.selectedCategory = action.payload.category;
        }
      }
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
