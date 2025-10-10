import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import wishlistSlice from "../features/wishlistSlice";
import productSlice from "../features/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistWishlistConfig = {
  key: "wishlist",
  storage,
};

const persistedWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistSlice
);

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: persistedWishlistReducer,
    products: productSlice,
  },
});

export const persistor = persistStore(store);
