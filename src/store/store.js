
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import seccionReducer from "./slices/seccionSlice";
import scrollReducer from "./slices/scrollSlice";

export const store = configureStore(
    {
        reducer: {
            theme: themeReducer,
            secciones:seccionReducer,
            scroll:scrollReducer
        },
        devTools: process.env.NODE_ENV !== "production",
    }
)