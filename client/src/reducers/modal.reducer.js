import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  isForm: false,
  isModalSubmit: false,
  isDescriptionModal: false,
  isSearchModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    openModal(state, { payload }) {
      state[payload] = true;
    },
    closeModal(state, action) {
      state[action.payload] = false;
    },

    formOpen(state) {
      state.isForm = true;
    },
    formClose(state) {
      state.isForm = false;
    },
  },
});

export const { openModal, closeModal, formOpen, formClose } = modalSlice.actions;
export default modalSlice.reducer;
