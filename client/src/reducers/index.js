import cartReducer, {
  addToCart,
  removeFromCart,
  emptyCart,
  totalPriceCount,
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
