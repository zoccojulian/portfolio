import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import useIsInView from '../../../hooks/useIsInView';
 

//Estilos
import "./sobreMi.scss";
import { secciones } from '../../../../js/secciones';


const SobreMi = () => {

    const { referencia } = useIsInView(secciones.SOBRE_MI)

    return (
        <motion.section className='sobreMi' ref={referencia} >
            <motion.h2 >hola</motion.h2>
        </motion.section>
    );
}

export default SobreMi;
