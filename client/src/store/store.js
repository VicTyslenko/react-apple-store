import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../reducers/filter.reducer";
import modalReducer from "../reducers/modal.reducer";
import dataReducer from "../reducers/data.reducer";
import { cartReducer } from "../reducers";
import favouriteReducer from "../reducers/favourite.reducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    filter: filterReducer,
  },
});

export default store;
