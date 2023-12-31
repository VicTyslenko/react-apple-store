import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
    isForm: false,
    isModalSubmit: false,
    isDescriptionModal: false,
  },
  reducers: {
    modalOpen(state) {
      state.isModal = true;
    },
    modalClose(state) {
      state.isModal = false;
    },
    formOpen(state) {
      state.isForm = true;
    },
    formClose(state) {
      state.isForm = false;
    },
    modalSubmitOpen(state) {
      state.isModalSubmit = true;
    },
    modalSubmitClose(state) {
      state.isModalSubmit = false;
    },
    modalDescriptionOpen(state) {
      state.isDescriptionModal = true;
    },
    modalDescriptionClose(state) {
      state.isDescriptionModal = false;
    },
  },
});

export const {
  modalOpen,
  modalClose,
  formOpen,
  formClose,
  modalSubmitClose,
  modalSubmitOpen,
  modalDescriptionClose,
  modalDescriptionOpen,
} = modalSlice.actions;
export default modalSlice.reducer;
