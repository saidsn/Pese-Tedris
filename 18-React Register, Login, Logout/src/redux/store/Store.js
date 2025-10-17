import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import wishlistSlice from "../features/wishlistSlice";
import productSlice from "../features/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from "../features/basketSlice";

const persistWishlistConfig = {
  key: "wishlist",
  storage,
};
const persistBasketConfig = {
  key: "basket",
  storage,
};

const persistedWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistSlice
);
const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice);
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: persistedWishlistReducer,
    products: productSlice,
    basket: persistedBasketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
