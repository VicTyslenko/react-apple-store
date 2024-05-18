import cartReducer, { addToCart, removeFromCart, emptyCart, totalPriceCount, increaseItemsQuantity, decreaseItemsQuantity } from "./cart.reducer";
import modalReducer, { openModal, closeModal, formOpen, formClose } from "./modal.reducer";
import { dataFetch } from "./data.reducer";
import favouriteReducer, { addToFavourite, removeFromFavourite } from "./favourite.reducer";

export {
  cartReducer,
  addToCart,
  removeFromCart,
  emptyCart,
  totalPriceCount,
  modalReducer,
  dataFetch,
  increaseItemsQuantity,
  decreaseItemsQuantity,
  favouriteReducer,
  addToFavourite,
  removeFromFavourite,
  openModal,
  closeModal,
  formClose,
  formOpen,
};
