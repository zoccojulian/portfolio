import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion';


//Estilos
import "./sobreMi.scss";
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';


const SobreMi = () => {

    return (
        <motion.section className='sobreMi'
        >
        <motion.h2>hola</motion.h2>
            
        </motion.section>
    );
}

export default SobreMi;
