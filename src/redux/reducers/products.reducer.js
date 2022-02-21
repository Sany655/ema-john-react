import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts', async (page) => {
    try {
        const response = await axios.get(`http://localhost:5000/products?page=${page}&size=10`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
})

const productReducer = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        error: null,
        pageNo: 0,
        currentPageNo: 0,
        search: '',
        searchProducts: [],
        searchStatus:false
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.searchProducts = action.payload.products;
            state.pageNo = Math.ceil(action.payload.count / 10);
        }).addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "Something went wrong";
        })
    },
    reducers: {
        changePageNo: (state, action) => {
            state.currentPageNo = action.payload;
        },
        searchProducts: (state, action) => {
            state.search = action.payload;
            if (action.payload.length > 0) {
                state.searchStatus = true;
                state.searchProducts = state.products.filter(product => product.name.toLowerCase().includes(action.payload.toLowerCase()));
            }else{
                state.searchProducts = state.products;
                state.searchStatus = false;
            }
        },
    }
})

export const { changePageNo, searchProducts } = productReducer.actions;
export default productReducer.reducer;