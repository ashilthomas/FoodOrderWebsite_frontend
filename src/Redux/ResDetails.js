import { createSlice } from '@reduxjs/toolkit';

const resDetailsSlice = createSlice({
    name: "restaurantDetails",
    initialState: {
        resDetails: {}
    },
    reducers: {
        setResDetails: (state, action) => {
            state.resDetails = action.payload;
        },
    }
});

export const { setResDetails } = resDetailsSlice.actions;

export default resDetailsSlice.reducer;
