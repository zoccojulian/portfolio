import React, { useEffect } from 'react';
import './formacion.scss';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import LiFormacion from '../../../pure/liFormacion/liFormacion';
import { useAnimate, useInView, stagger, motion } from 'framer-motion';

const listaFormacion = [
    {
        id: 0,
        foto: '/img/formacion/UBA.png',
        titulo: 'Ingeniería Informáctica (3 años)',
        institucion: 'Universidad de Buenos Aires',
        periodo: '2002-2005'
    },
    {
        id: 1,
        foto: '/img/formacion/logo_UAI.png',
        titulo: 'Realización Audiovisual',
        institucion: 'Universidad Abierta Interamericana',
        periodo: '2005-2008'
    },
    {
        id: 2,
        foto: '/img/formacion/alura.png',
        titulo: 'Desarrolador Full Stack',
        institucion: 'Oracle One - ALURA',
        periodo: '2021-2022'
    },
    {
        id: 3,
        foto: '/img/formacion/openBootCamp.png',
        titulo: 'Front End React Js',
        institucion: 'OpenBootCamp',
        periodo: '2022-2023'
    }
]

const listaReverse = listaFormacion.reverse();


const Formacion = () => {

    const { referencia } = useIsInView(secciones.FORMACION, secciones.EXPERIENCIA);

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope)

    useEffect(() => {

        animate(
            ".liFormacion__foto-container",
            isInView
                ? { opacity: 1, scale: [0, 1.2, 1] }
                : { opacity: 0, scale: 0 },
            {
                duration: 0.4,
                delay: isInView ? stagger(0.5, { startDelay: 0.15 }) : 0
            }
        );

        animate(
            ".liFormacion__textos",
            isInView
                ? { opacity: 1, transform: 'translateX(0%)' }
                : { opacity: 0, transform: 'translateX(-100%)' },
            {
                duration: 0.4,
                delay: isInView ? stagger(0.2, { startDelay: 0.5 }) : 0
            }
        );


    }, [isInView])

    return (
        <section
            ref={referencia}
            className='formacion'
        >
            <TituloSeccion titulo='Formación' ></TituloSeccion>
            <div
                className='formación__lista-container'
            >
                <motion.ul
                    ref={scope}
                    className='formacion__lista'
                >
                    {listaReverse.map((formacion, key) => (
                        <LiFormacion formacion={formacion} key={key}></LiFormacion>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}

export default Formacion;
