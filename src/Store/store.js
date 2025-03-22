import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Store/cartSlice'
import productReducer from '../Store/prodctSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    }
});

export default store;