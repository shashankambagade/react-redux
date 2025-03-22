import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : JSON.parse(localStorage.getItem("cart")) || [],
    totalAmount: 0,
}

const  cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Add to cart logic
            const existinfItem = state.cartItems.find((item) => item.id === action.payload.id);
            if(existinfItem){
                existinfItem.quantity += 1;}
            else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        // increae the quantity

        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => 
            item.id === action.payload);
            if(item){
                item.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(state.cartItems));
            }
        },
        // decrease the quantity
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) =>item.id === action.payload); 
            if(item && item.quantity>1){
                item.quantity -=1;
            }
            else{
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        }
    }
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}  = cartSlice.actions;
export default cartSlice.reducer;
