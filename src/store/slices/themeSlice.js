import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: true
}

export const themeSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers:{
            toggleTheme: ( state ) => {
                state.dark = !state.dark
            }
        }
    }
)

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
