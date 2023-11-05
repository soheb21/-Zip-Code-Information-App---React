import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostalDetails } from "./detailAPI";
const initialState = {
    data: null,
    loading: false,
    error: null
};

export const fetchPostalDetailsAsync = createAsyncThunk("/getPostalDetails", async (postalCode, { rejectWithValue }) => {
    try {
        const response = await fetchPostalDetails(postalCode)
        if (response !== 404) {
            return response.data;
        }
        return rejectWithValue("Not Available")

    } catch (error) {
        if (error) {
            return rejectWithValue("Server Failed");
        }
    }
})


export const detailSlice = createSlice({
    name: "Postal-Details",
    initialState,
    reducers: {
        reset: (state) => {
            state.data = null;
            state.error = null;
        }
    },
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
                state.data = null;
                state.error = action.payload;
            })
    }
})

export const selectPostDetails = (state) => state.postalDetail.data;
export const isLoading = (state) => state.postalDetail.loading;
export const errorMssg = (state) => state.postalDetail.error;

export const {reset} = detailSlice.actions;
export default detailSlice.reducer;
