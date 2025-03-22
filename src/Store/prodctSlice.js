import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../Services/api";

export const getProducts = createAsyncThunk(
    "products/getProducts", async () => {
        return await fetchProducts();
});

const productSlice = createSlice({
    name: 'products', 
    initialState: {
        items: [],
        status: 'idle',
        error: null},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.status = 'loading...';
        })
        .addCase(getProducts.fulfilled,  (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        })
        .addCase(getProducts.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export default productSlice.reducer;
