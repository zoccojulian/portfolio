import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';

//Estilos
import "./sobreMi.scss";
import { setSeccion } from '../../../../store/slices/seccionSlice';
import { secciones } from '../../../../js/secciones';

const SobreMi = () => {


    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 'some' })

    const dispatch = useDispatch();

    useEffect(() => {
        
        if (isInView) {
            dispatch( setSeccion(secciones.SOBRE_MI) )
        }

    }, [isInView])

    return (
        <section className='sobreMi' ref={ref}>
            <motion.h2>hola</motion.h2>
        </section>
    );
}

export default SobreMi;
