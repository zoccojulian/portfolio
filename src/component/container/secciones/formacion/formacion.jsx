import React from 'react';
import './formacion.scss';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import LiFormacion from '../../../pure/liFormacion/liFormacion';

const listaFormacion = [
    {
        id:0,
        foto: '/img/formacion/UBA.png',
        titulo: 'Ingeniería Informáctica (3 años)',
        institucion: 'Universidad de Buenos Aires',
        periodo: '2002-2005'
    },
    {
        id:1,
        foto: '/img/formacion/logo_UAI.png',
        titulo: 'Realización Audiovisual',
        institucion: 'Universidad Abierta Interamericana',
        periodo: '2005-2008'
    },
    {
        id:2,
        foto: '/img/formacion/alura.png',
        titulo: 'Desarrolador Full Stack',
        institucion: 'Oracle One - ALURA',
        periodo: '2021-2022'
    },
    {
        id:3,
        foto: '/img/formacion/openBootCamp.png',
        titulo: 'Front End React Js',
        institucion: 'OpenBootCamp',
        periodo: '2022-2023'
    }
]

const Formacion = () => {

    const { referencia } = useIsInView(secciones.FORMACION, secciones.EXPERIENCIA);

    return (
        <section 
            ref={ referencia } 
            className='formacion'
        >
            <TituloSeccion titulo='Formación' ></TituloSeccion>
            <div
                className='formación__lista-container'
            >
                <ul
                    className='formacion__lista'
                >
                    { listaFormacion.map( ( formacion, key ) => (
                        <LiFormacion formacion={formacion} ></LiFormacion>
                    ) ) }
                </ul>
            </div>
        </section>
    );
}

export default Formacion;
