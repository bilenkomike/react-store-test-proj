import { createSlice } from "@reduxjs/toolkit";




const currenciesSlice = createSlice({
    name: 'currencies',
    initialState:{
        currencies: [],
        selected: null,
        openList: false,
    },
    reducers: {
        pushCurrenciesInitial: (state,action) => {
            const curr = action.payload.curr
            state.currencies = curr;
            if(state.selected === null) {
                state.selected = curr[0];
            }
        },

        toggle: state => {
            state.openList = !state.openList;
        },
        changeCurr: (state, action) => {
            const symb = action.payload.symb;
            state.selected = state.currencies.find(curr => curr.symbol === symb);
        }
        
    }
})


export const currenciesActions = currenciesSlice.actions;

export default currenciesSlice;