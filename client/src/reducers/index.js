import cartReducer, {
  addToCart,
  removeFromCart,
  emptyCart,
  totalPriceCount,
  increaseItemsQuantity,
  decreaseItemsQuantity
} from "./cart.reducer";
import modalReducer, {
  modalOpen,
  modalClose,
  formOpen,
  formClose,
  modalSubmitClose,
  modalSubmitOpen,
  modalDescriptionClose,
  modalDescriptionOpen,
} from "./modal.reducer";
import { dataFetch } from "./data.reducer";
import favouriteReducer, {
  addToFavourite,
  removeFromFavourite,
} from "./favourite.reducer";

export {
  cartReducer,
  addToCart,
  removeFromCart,
  emptyCart,
  totalPriceCount,
  modalReducer,
  modalOpen,
  modalClose,
  dataFetch,
  increaseItemsQuantity,
  decreaseItemsQuantity,
  favouriteReducer,
  addToFavourite,
  removeFromFavourite,
  formOpen,
  formClose,
  modalSubmitClose,
  modalSubmitOpen,
  modalDescriptionClose,
  modalDescriptionOpen,
};
