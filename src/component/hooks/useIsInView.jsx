import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setSeccion } from '../../store/slices/seccionSlice';

const useIsInView = ( seccion ) => {

    const dispatch = useDispatch();

    const referencia = useRef();
    const isInView = useInView(referencia, {amount:0.5});

    useEffect(() => {
        
        if(isInView){
            console.log(seccion)
            dispatch( setSeccion(seccion) )
        }
        

    }, [isInView])


    return { referencia };
}

export default useIsInView;
