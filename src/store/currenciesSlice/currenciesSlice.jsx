import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencies = createAsyncThunk(
  "currencies/getCurrencies",
  async () => {
    const query = `
    query{
        currencies{symbol, label}
      }
    `;
    const response = await axios.post("http://localhost:4000/", { query });
    const data = response.data.data.currencies;
    return data;
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    currencies: [],
    isLoading: false,
    selected: localStorage.getItem("currency")
      ? JSON.parse(localStorage.getItem("currency"))
      : null,
    openList: false,
  },
  reducers: {
    toggle: (state) => {
      state.openList = !state.openList;
    },
    changeCurr: (state, action) => {
      const symb = action.payload.symb;
      const newSelectedCurrency = state.currencies.find(
        (curr) => curr.symbol === symb
      );
      localStorage.setItem("currency", JSON.stringify(newSelectedCurrency));
      state.selected = newSelectedCurrency;
    },
  },
  extraReducers: {
    [getCurrencies.pending]: (state) => {
      state.isLoading = true;
    },
    [getCurrencies.fulfilled]: (state, action) => {
      state.currencies = action.payload;
      if (!state.selected) {
        state.selected = action.payload[0];
        localStorage.setItem("currency", JSON.stringify(action.payload[0]));
      }
      state.isLoading = false;
    },
    [getCurrencies.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const currenciesActions = currenciesSlice.actions;
export default currenciesSlice;
