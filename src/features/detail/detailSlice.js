import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostalDetails } from "./detailAPI";
const initialState = {
    data: {},
    loading: false,
    error: null
};

export const fetchPostalDetailsAsync = createAsyncThunk("/getPostalDetails", async (postalCode, { rejectWithValue }) => {
    try {
        const response = await fetchPostalDetails(postalCode)
        return response;
    } catch (error) {
        return rejectWithValue.error;
    }
})


export const detailSlice = createSlice({
    name: "Postal-Details",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostalDetailsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPostalDetailsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPostalDetailsAsync.rejected, (state, action) => {
                state.loading = false;
                state.data = {};
                state.error = action.payload;
            })
    }
})

export const selectPostDetails = (state) => state.postalDetail.data;
export default detailSlice.reducer;
