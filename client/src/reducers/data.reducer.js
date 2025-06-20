import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../Helpers/sendRequest";
import { API_URL } from "../config/API";

const initialState = {
  data: [],
  isLoading: false,
  selectedCard: null,
};

export const dataFetch = createAsyncThunk(
  "data/fetch",
  async ({ category = null }) => {
    const response = await sendRequest(
      `${API_URL}/products${category ? `?category=${category}` : ""}`
    );
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "data/fetchProductById",
  async (productId) => {
    const response = await sendRequest(`${API_URL}/products/${productId}`);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      state.selectedCard = payload;
      state.isLoading = false;
    });

    builder.addCase(dataFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
  },
});
export default dataSlice.reducer;
