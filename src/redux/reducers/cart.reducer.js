import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getStoredCart, addToDb, deleteFromDb, clearTheCart } from '../../utilities/fakedb'

export const getCart = createAsyncThunk('cart/getCart', async () => {
    const savedCarts = getStoredCart();
    const keys = Object.keys(savedCarts);
    const url = 'http://localhost:5000/products/byKeys';
    const response = await axios.post(url, keys);
    return { products: response.data };
})

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder.addCase(getCart.pending, (state, action) => {
            state.loading = true
        }).addCase(getCart.fulfilled, (state, action) => {
            const products = action.payload.products;
            const savedCarts = getStoredCart();
            const storedCart = [];
            for (const key in savedCarts) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCarts[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            state.cart = storedCart;
            state.loading = false
        }).addCase(getCart.rejected, (state, action) => {
            state.error = "Server error"
            state.loading = false
        })
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            addToDb(product.key)
            let newCart;
            let cartItem = state.cart.find(c => c.key === product.key)
            if (cartItem) {
                newCart = state.cart.filter(c => c.key !== product.key)
                cartItem.quantity += 1;
                newCart = [...newCart, cartItem]
            }
            else {
                newCart = [...state.cart, product]
            }
            state.cart = newCart;
            // console.log('added to cart')
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(c => c.key !== action.payload)
            deleteFromDb(action.payload)
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;