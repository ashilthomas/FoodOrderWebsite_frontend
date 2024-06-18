
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../Redux/items"

export const store = configureStore({
  reducer: {
    menusData: dataReducer,
  },
});
