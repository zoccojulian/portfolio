
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import seccionSlice from "./slices/seccionSlice";


export const store = configureStore(
    {
        reducer: {
            theme: themeReducer,
            secciones:seccionSlice
        },
        devTools: process.env.NODE_ENV !== "production",
    }
)