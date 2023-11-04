import { configureStore } from "@reduxjs/toolkit";
import postalDetailReducer from "../features/detail/detailSlice"

export const store = configureStore({
    reducer: {
        postalDetail: postalDetailReducer
    },
});