import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = null;
    },
  },
});

export const { setSelectedCategory, resetSelectedCategory } =
  filterSlice.actions;
export default filterSlice.reducer;
