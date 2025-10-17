import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  allProducts: [],
};

const baseUrl = "http://localhost:3000/products";

export const GetProducts = createAsyncThunk("get/products", async () => {
  const res = await axios(baseUrl);
  return res.data;
});

export const AddProduct = createAsyncThunk("add/products", async (product) => {
  const { data } = await axios.post(baseUrl, product);
  return data;
});

export const DeleteProduct = createAsyncThunk("delete/products", async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
  return id;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    SearchProduct: (state, action) => {
      state.products = state.allProducts.filter((product) =>
        product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase().trim())
      );
    },

    SortProductTitle: (state, action) => {
      if (action.payload == "az") {
        state.products = state.products.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else if (action.payload == "za") {
        state.products = state.products.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
    },

    SortProductPrice: (state, action) => {
      if (action.payload == "low") {
        state.products = state.products.sort((a, b) => a.price - b.price);
      } else if (action.payload == "high") {
        state.products = state.products.sort((a, b) => b.price - a.price);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    builder.addCase(AddProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });

    builder.addCase(DeleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload
      );
    });
  },
});

export const { SortProductTitle, SortProductPrice, SearchProduct } =
  productSlice.actions;

export default productSlice.reducer;
