import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const GetProducts = createAsyncThunk("get/products", async () => {
  const res = await axios("https://fakestoreapi.com/products");
  return res.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
