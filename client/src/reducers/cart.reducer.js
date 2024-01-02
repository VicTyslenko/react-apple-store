import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartToLocal: JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, { payload }) {
      const item = state.cartToLocal.find((el) => el.id === payload.id);
      if (item) {
        alert(`the product ${item.name} has already added`);
      } else {
        state.cartToLocal.push({
          ...payload,
          quantity: 1,
          originalPrice: payload.price,
        });
      }
      state.totalPrice += payload.price;
    },

    removeFromCart(state, { payload }) {
      const item = state.cartToLocal.find((el) => el.id === payload.id);
      if (item) {
        state.totalPrice -= item.price;
      }
      state.cartToLocal = state.cartToLocal.filter(
        (el) => el.id !== payload.id
      );
    },
    emptyCart(state) {
      state.cartToLocal = [];
      state.totalPrice = 0;
    },
    increaseItemsQuantity(state, { payload }) {
      const itemIndex = state.cartToLocal.findIndex(
        (el) => el.id === payload.id
      );
      if (itemIndex !== -1) {
        state.cartToLocal = state.cartToLocal.map((item, index) => {
          return itemIndex === index
            ? { ...item, quantity: item.quantity + 1, price: item.price * 2 }
            : item;
        });
      }
      state.totalPrice += payload.price;
    },
    decreaseItemsQuantity(state, { payload }) {
      const item = state.cartToLocal.find((el) => el.id === payload.id);

      if (item) {
        state.cartToLocal = state.cartToLocal.map((el) => {
          return el === item
            ? {
                ...el,
                quantity: el.quantity >= 2 ? el.quantity - 1 : el.quantity,
                price:
                  el.price > el.originalPrice ? el.price / 2 : el.originalPrice,
              }
            : el;
        });
      }
      state.totalPrice = state.cartToLocal.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  emptyCart,
  totalPriceCount,
  increaseItemsQuantity,
  decreaseItemsQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
