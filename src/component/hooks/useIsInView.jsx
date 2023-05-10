import React, { useRef, useEffect , useState} from 'react';
import { useInView, useScroll , useMotionValueEvent} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setSeccion } from '../../store/slices/seccionSlice';
import { secciones } from '../../js/secciones';

const useIsInView = ( seccion , anterior=secciones.INICIO ) => {

    const referencia = useRef();
    const inView = useInView(referencia,{amount: 0.1});
    const dispatch = useDispatch();

    const isUp = useSelector((state) => state.scroll.isUp);

    useEffect(() => {
        
        if(inView && !isUp){
            dispatch(setSeccion(seccion));
        }
        if(!inView && isUp){

            dispatch(setSeccion(anterior))
        }

    }, [inView])


    return { referencia };
}

export default useIsInView;
