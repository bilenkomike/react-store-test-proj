import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
    total: {},
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = { ...action.payload };
      // console.log(product);
      // return;
      state.count += 1;
      const exists = state.items.find((item) => item.id === product.id);
      // console.log(!exists);
      if (!exists) {
        console.log("doesnt exits!!!!");
        let attributes = {};
        if (product.attributes) {
          try {
            product.attributes.map(
              (attr) =>
                (attributes[attr.id.toLowerCase().split(" ").join("-")] =
                  attr.type === "text"
                    ? attr.items[0].value
                    : attr.items[0].displayValue)
            );
          } catch (e) {
            attributes = product.attributes;
          }
        } else {
          attributes = product.attributes;
        }

        const item = {
          id: product.id,
          attributes: attributes,
          count: 1,
          prices: product.prices,
        };
        const prices = [...product.prices];

        state.items.push(item);
        prices.map((price) => {
          if (!state.total[price.currency.symbol]) {
            state.total[price.currency.symbol] = 0;
          }
          state.total[price.currency.symbol] += parseFloat(
            price.amount.toFixed(2)
          );
          return state;
        });
      } else {
        // if prod exists

        const props = state.items.find(
          (item) => item.id === product.id
        ).attributes;
        let equal = true;
        console.log(product);
        for (const key of Object.keys(props)) {
          console.log(product.attributes);
          console.log(product.attributes.length);
          if (product.attributes.length) {
            for (const attribute of product.attributes) {
              if (attribute.name) break;
              console.log(key, props[key], attribute);
              if (props[key] !== attribute[key]) {
                equal = false;
              }
            }
          } else {
            if (props[key] !== product.attributes[key]) {
              equal = false;
            }
          }
        }

        console.log(equal, "equal");
        if (equal) {
          state.items.find((item) => item.id === product.id).count += 1;
          state.items
            .find((item) => item.id === product.id)
            .prices.map((price) => {
              if (!state.total[price.currency.symbol]) {
                state.total[price.currency.symbol] = 0;
              }
              state.total[price.currency.symbol] += parseFloat(
                price.amount.toFixed(2)
              );
              return state;
            });
        } else {
          let attributes = {};
          if (product.attributes) {
            // console.log(product.attributes);
            try {
              product.attributes.map(
                (attr) =>
                  (attributes[attr.id.toLowerCase().split(" ").join("-")] =
                    attr.type === "text"
                      ? attr.items[0].value
                      : attr.items[0].displayValue)
              );
            } catch (e) {
              attributes = product.attributes;
            }
          } else {
            attributes = product.attributes;
          }

          const item = {
            id: product.id,
            attributes: attributes,
            count: 1,
            prices: product.prices,
          };
          const prices = [...product.prices];

          state.items.push(item);
          prices.map((price) => {
            if (!state.total[price.currency.symbol]) {
              state.total[price.currency.symbol] = 0;
            }
            state.total[price.currency.symbol] += parseFloat(
              price.amount.toFixed(2)
            );
            return state;
          });
        }
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload.id;
      state.count -= 1;
      state.items.find((item) => item.id === id).count -= 1;
      state.items
        .find((item) => item.id === id)
        .prices.map((price) => {
          state.total[price.currency.symbol] -=
            Math.round(price.amount * 100) / 100;
          return state;
        });
      if (state.items.find((item) => item.id === id).count <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }

      for (let obj in state.total) {
        console.log(state.total[obj]);
      }
    },

    setTotalDefault: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
