import { createSlice } from "@reduxjs/toolkit";

const productsExistence = (product, list) => {
  let exists = true;
  if (!list.find((item) => item.id === product.id)) {
    exists = false;
    return exists;
  } else {
    const productsInList = list.filter((item) => item.id === product.id);
    const nesseseryItem = productsInList.map((item) => {
      const { attributes } = item;
      const { attributes: prodAttrs } = product;
      if (prodAttrs) {
        for (const key of Object.keys(prodAttrs)) {
          if (prodAttrs[key] !== attributes[key]) {
            exists = false;
            return exists;
          }
        }
      }
      return item;
    });
    return nesseseryItem;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    count: localStorage.getItem("cartCount")
      ? parseInt(localStorage.getItem("cartCount"))
      : 0,
    total: localStorage.getItem("total")
      ? JSON.parse(localStorage.getItem("total"))
      : {},
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = { ...action.payload };
      state.count += 1;

      const prices = [...product.prices];

      prices.map((price) => {
        if (!state.total[price.currency.symbol]) {
          state.total[price.currency.symbol] = 0;
        }
        state.total[price.currency.symbol] += parseFloat(
          price.amount.toFixed(2)
        );
        return state;
      });
      let count = 1;

      let attributes = {};
      if (action.payload.additionType === "list") {
        product.attributes.map((attribute) => {
          attributes[attribute.name.toLowerCase().split(" ").join("-")] =
            attribute.type === "text"
              ? attribute.items[0].value
              : attribute.items[0].displayValue;
          return attribute;
        });
      } else {
        attributes = product.attributes;
      }

      product.attributes = attributes;

      const exists = productsExistence(product, state.items);

      if (!exists || !exists[0]) {
        count = 1;
        const item = {
          id: product.id,
          attributes: attributes,
          count: count,
          prices: product.prices,
        };

        state.items.push(item);
      } else {
        state.items.map((item) => {
          const { attributes } = item;
          let thisProd = true;
          const { attributes: prodAttributes } = product;
          if (prodAttributes) {
            for (const key of Object.keys(prodAttributes)) {
              if (prodAttributes[key] !== attributes[key]) {
                thisProd = false;
              }
            }
          }

          if (thisProd) {
            item.count += 1;
          }

          return item;
        });
      }

      localStorage.setItem("cartCount", state.count);
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    removeItemFromCart: (state, action) => {
      const product = { ...action.payload };

      state.count -= 1;
      state.items.map((item) => {
        const { attributes } = item;
        let thisProd = true;

        if (product.attributes) {
          const { attributes: prodAttributes } = product;
          for (const key of Object.keys(prodAttributes)) {
            if (prodAttributes[key] !== attributes[key]) {
              thisProd = false;
            }
          }
        }

        if (thisProd) {
          item.count -= 1;
        }
        if (item.count > 0) {
          return item;
        } else {
          state.items.filter((prod) => prod.count >= 1);
        }
        return state;
      });

      state.items = state.items.filter((item) => item.count > 0);
      const prices = [...product.prices];

      prices.map((price) => {
        if (!state.total[price.currency.symbol]) {
          state.total[price.currency.symbol] = 0;
        }
        state.total[price.currency.symbol] -= parseFloat(
          price.amount.toFixed(2)
        );
        return state;
      });
      localStorage.setItem("cartCount", state.count);
      localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("total", JSON.stringify(state.total));
    },

    setTotalDefault: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
