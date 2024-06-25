
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../Redux/items"
import restaurantDetailsReducer from '../Redux/ResDetails'; // Corrected import


export const store = configureStore({
  reducer: {
    menusData: dataReducer,
    resData: restaurantDetailsReducer // Corrected reducer key
  },
});
