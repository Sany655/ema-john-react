import cartReducer from "./reducers/cart.reducer";
import productsReducer from "./reducers/products.reducer";

const reducers = {
    products:productsReducer,
    cart:cartReducer
}

export default reducers;