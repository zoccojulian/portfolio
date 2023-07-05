
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import seccionReducer from "./slices/seccionSlice";
import scrollReducer from "./slices/scrollSlice";
import menuReducer from "./slices/menuSlice";

export const store = configureStore(
    {
        reducer: {
            theme: themeReducer,
            secciones:seccionReducer,
            scroll:scrollReducer,
            menu:menuReducer
        },
        devTools: process.env.NODE_ENV !== "production",
    }
)