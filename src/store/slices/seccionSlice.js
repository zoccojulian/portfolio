import { createSlice } from "@reduxjs/toolkit";
import { secciones }  from '../../js/secciones'

const initialState = {
    seccion: secciones.INICIO
}

export const seccionSlice = createSlice(
    {
        name: 'secciones',
        initialState,
        reducers:{
            setSeccion: ( state , action ) => {
                state.seccion = action.payload;
            }
        }
    }
)

export const { setSeccion } = seccionSlice.actions;
export default seccionSlice.reducer;
