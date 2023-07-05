import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion';
import { useSelector } from 'react-redux';
import fondoCentro from '../../../../assets/fondos/fondo_centro.webp'

//Estilos
import "./sobreMi.scss";
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import Hobbies from '../../hobbies/hobbies';

const SobreMi = () => {

    const { referencia } = useIsInView(secciones.SOBRE_MI, secciones.INICIO);

    const isThemeDark = useSelector ( ( state ) => state.theme.dark);

    const textoRef = useRef(null);
    const textoView = useInView(textoRef);

    const variants_texto = {
        visible:{
            opacity:1
        },
        hidden:{
            opacity:0
        }
    }

    return (
        <motion.section className='sobreMi'
            ref={referencia}
        >
            {!isThemeDark && <img  className='sobreMi__fondo' src={ fondoCentro } ></img>}
            <TituloSeccion titulo='Sobre Mi' ></TituloSeccion>
            <motion.div
                className='sobreMi__texto-container'
            >
                <motion.p
                    className='sobreMi__texto'
                    ref={textoRef}
                    variants={variants_texto}
                    animate={ textoView ? 'visible' : 'hidden' }
                    transition={{duration:1, delay: 0.3}}
                    
                >Luego de concluir el bootcamp
                    Oracle One Next Education, seguí
                    mis estudios orientados a Front End
                    con React Js. Desarrollé proyectos
                    propios con buenas prácticas de
                    programación y metodologías ágiles.
                    Actualmente me encuentro
                    cursando en Argentina programa
                    Python orientado a Ciencia de Datos.
                </motion.p>
                <Hobbies></Hobbies>
            </motion.div>
        </motion.section>
    );
}

export default SobreMi;
