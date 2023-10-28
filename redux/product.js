import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [], // Initial state should be an array of products
  reducers: {
    // Define any actions to update products here
  },
});

export const {
  /* Actions for updating products */
} = productsSlice.actions;
export default productsSlice.reducer;
