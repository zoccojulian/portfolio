import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion';
import { useSelector } from 'react-redux';

//Estilos
import "./sobreMi.scss";
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import Hobbies from '../../hobbies/hobbies';

const SobreMi = () => {

    const { referencia } = useIsInView(secciones.SOBRE_MI, secciones.INICIO)

    return (
        <motion.section className='sobreMi'
            ref={referencia}
        >
            <TituloSeccion titulo='Sobre Mi' ></TituloSeccion>
            <div className='sobreMi__texto-container'>
                <p className='sobreMi__texto'>Luego de concluir el bootcamp
                    Oracle One Next Education, seguí
                    mis estudios orientados a Front End
                    con React Js. Desarrollé proyectos
                    propios con buenas prácticas de
                    programación y metodologías ágiles.
                    Actualmente me encuentro
                    cursando en Argentina programa
                    Python orientado a Ciencia de Datos.
                </p>
                <Hobbies></Hobbies>
            </div>
        </motion.section>
    );
}

export default SobreMi;
