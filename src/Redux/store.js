
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../Redux/items"
import cartSlice from '../Redux/cart'; // Corrected import
import tokenSlice from '../Redux/token'



export const store = configureStore({
  reducer: {
    menusData: dataReducer,
    cartData: cartSlice ,// Corrected reducer key
    tokenData:tokenSlice 
  },
});
