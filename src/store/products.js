import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Another Test",
    price: 10,
    description: "This is a second product - amazing!",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
