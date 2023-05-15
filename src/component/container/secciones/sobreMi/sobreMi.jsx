import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion';
import { useSelector } from 'react-redux';

//Estilos
import "./sobreMi.scss";
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';

const SobreMi = () => {

    const { referencia } = useIsInView(secciones.SOBRE_MI, secciones.INICIO)

    return (
        <motion.section className='sobreMi'
            ref={referencia}
        >
            <TituloSeccion titulo='Sobre Mi' ></TituloSeccion>
        </motion.section>
    );
}

export default SobreMi;
