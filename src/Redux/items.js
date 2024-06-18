// src/features/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'menuitems',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    fetchMenusStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMenusSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchMenusFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {  fetchMenusStart, fetchMenusSuccess,  fetchMenusFailure } = dataSlice.actions;
export default dataSlice.reducer;
