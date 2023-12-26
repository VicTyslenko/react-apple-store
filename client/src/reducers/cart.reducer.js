import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartToLocal: JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, { payload }) {
      const cartId = state.cartToLocal.find((el) => el.id === payload.id);
      if (cartId) {
        alert(`${payload.name} has already added`);
      } else {
        state.cartToLocal.push(payload);
        state.totalPrice += payload.price;
      }
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
  },
});
export const { addToCart, removeFromCart, emptyCart, totalPriceCount } =
  cartSlice.actions;
export default cartSlice.reducer;
