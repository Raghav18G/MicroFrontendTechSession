import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";
import { getProductsList } from "./actionCreator";
import state from "./state";

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    // Get Products
    builder.addCase(getProductsList.pending, (state, action) => {
      state.Products_Data.Products_Data_Loading = true;
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.Products_Data.Products_Data_Info = action?.payload?.data;
    });
    builder.addCase(getProductsList.rejected, (state, action) => {
      state.Products_Data.Products_Data_Error = action?.payload;
    });
  },
});

export default productsSlice.reducer;
