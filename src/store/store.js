
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import seccionReducer from "./slices/seccionSlice";


export const store = configureStore(
    {
        reducer: {
            theme: themeReducer,
            secciones:seccionReducer
        },
        devTools: process.env.NODE_ENV !== "production",
    }
)