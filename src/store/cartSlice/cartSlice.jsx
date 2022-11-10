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
            const product = {...action.payload};
            state.count += 1;
            const exists = state.items.find(item => item.id === product.id);
            console.log(!exists);
            if(!exists) {
                
                const attributes = {};
                product.attributes.map(attr => attributes[attr.id.toLowerCase().split(' ').join('-')] = attr.items[0].displayValue);
                console.log(product.prices);
                const item = {id: product.id, attributes: attributes, count: 1, prices: product.prices};
                const prices = [...product.prices];

                state.items.push(item);
                prices.map(price => state.total[price.currency.symbol] += (Math.round(price.amount * 100) / 100));      
                
            }
            else {
                state.items.find(item => item.id === product.id).count += 1;
                state.items.find(item => item.id === product.id).prices.map(price => {
                    
                    state.total[price.currency.symbol] += (Math.round(price.amount * 100) / 100);
                })
            }


        },
        removeItemFromCart: (state, action) =>  {
            const id = action.payload.id;
            state.count -= 1;
            state.items.find(item => item.id === id).count -= 1;
            state.items.find(item => item.id === id).prices.map(price => {
                state.total[price.currency.symbol] -= (Math.round(price.amount * 100) / 100);
            });
            if (state.items.find(item => item.id === id).count <= 0) {
                state.items = state.items.filter(item => item.id !== id);
                
            }

            for ( let obj in state.total ) {
                console.log(state.total[obj]);
            }
        },

        setTotalDefault: (state,action) => {
            state.total = action.payload;

        }

    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;