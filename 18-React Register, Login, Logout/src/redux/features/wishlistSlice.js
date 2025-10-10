import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddWishlist: (state, action) => {
      let exsistProduct = state.wishlist.find(
        (product) => product.id == action.payload.id
      );

      if (!exsistProduct) {
        state.wishlist.push(action.payload);
      } else {
        state.wishlist = state.wishlist.filter(
          (item) => item.id != action.payload.id
        );
      }
    },
  },
});

export const { AddWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
