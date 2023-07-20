import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProductsService,
  getProductsService,
} from "../../services/productsServices";

//  Get all Products
export const getProductsList = createAsyncThunk(
  "/products/listProducts",
  async (payload, thunkAPI) => {
    const response = await getProductsService(payload);
    return response;
  }
);

//Delete a Product
export const deleteProduct = createAsyncThunk(
  "/products/delete",
  async (payload, thunkAPI) => {
    console.log("IN DELETE ACTION");
    const { response, error } = await deleteProductsService(payload);
    console.log("Delete Response", response);
    if (response) {
      thunkAPI.dispatch(getProductsList());
    }
    if (error) {
      return thunkAPI.rejectWithValue(error);
    }
    return response;
  }
);
