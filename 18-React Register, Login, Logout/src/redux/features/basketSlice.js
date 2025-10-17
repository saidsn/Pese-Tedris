import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    Addbasket: (state, action) => {
      let existProduct = state.basket.find(
        (item) => item.id == action.payload.id
      );

      if (existProduct) {
        existProduct.count += 1;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    Increment: (state, action) => {
      let findProduct = state.basket.find((item) => item.id == action.payload);

      if (findProduct) {
        findProduct.count += 1;
      }
    },
    Decrement: (state, action) => {
      let findProduct = state.basket.find((item) => item.id == action.payload);

      if (findProduct) {
        if (findProduct.count > 1) {
          findProduct.count -= 1;
        }
      }
    },
    DeleteBasket: (state, action) => {
      let existProductIndex = state.basket.findIndex(
        (item) => item.id == action.payload
      );

      state.basket.splice(existProductIndex, 1);
    },
  },
});

export const { Addbasket, Increment, Decrement, DeleteBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
