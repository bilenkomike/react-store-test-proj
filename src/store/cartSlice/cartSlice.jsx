import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        total: {},
    },
    reducers: {
        addItemToCart: (state, action) =>  {
            console.log(action);
            const product = {...action.payload};
            state.count += 1;
            const exists = state.items.find(item => item.id === product.id);
            console.log(!exists);
            if(!exists) {

                const attributes = {};
                product.attributes.map(attr => {
                    attributes[attr.id.toLowerCase().split(' ').join('-')] = attr.items[0].displayValue;
                })
                const item = {id: product.id, attributes: attributes, count: 1, prices: product.prices};
                state.items.push(item);
                console.log(attributes);
                // state.items.push();
            }
        },
        removeItemFromCart: (state, action) =>  {
            console.log(action);
            const product = {...action.payload};
            state.count -= 1;
        },

        setTotalDefault: (state,action) => {
            state.total = action.payload;
        }

    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;