import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from "./products";
import uiSliceReducer from "./ui";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    ui: uiSliceReducer,
  },
});

export default store;
