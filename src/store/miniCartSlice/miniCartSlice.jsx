import { createSlice } from "@reduxjs/toolkit";



const miniCartSlice = createSlice({
    name: 'miniCart',
    initialState: {open: false},
    reducers: {
        toggle: (state) => {
            document.body.classList.toggle('no-scroll');
            state.open = !state.open;
        }
    }
});


export const miniCartActions = miniCartSlice.actions;

export default miniCartSlice;