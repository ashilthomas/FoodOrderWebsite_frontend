import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cartResponce",
    initialState: {
        cartRes: {},
        cartItems:[],
        cartCount:0

    },
    reducers: {
        setResDetails: (state, action) => {
            state.cartRes = action.payload;
        },
        getallCartItems:(state,action)=>{
           state.cartItems = action.payload
          
           
        }
    }
});

export const { setResDetails,getallCartItems } =  cartSlice.actions;

export default  cartSlice.reducer;
