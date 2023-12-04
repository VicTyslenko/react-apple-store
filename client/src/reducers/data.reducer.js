import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../Helpers/sendRequest";
import { API_URL } from "../config/API";

const initialState = {
  data: [],
};

export const dataFetch = createAsyncThunk("data/fetch", async (category) => {
  const response = await sendRequest(
    `${API_URL}/products?category=${category}`
  );
  return response;
});

const dataSlice = createSlice({
  name: "data",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.data = payload;
    });
  },
});
export default dataSlice.reducer;
