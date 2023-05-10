import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posicion: 0,
    isUp: false
}

export const scrollSlice = createSlice(
    {
        name: 'scroll',
        initialState,
        reducers:{
            setScroll: ( state , action ) => {
                state.posicion = action.payload;
            },
            setIsUp: ( state, action ) => {
                state.isUp = action.payload
            }
        }
    }
)

export const { setScroll , setIsUp} = scrollSlice.actions;
export default scrollSlice.reducer;
