import React from 'react';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import './skills.scss';
import { secciones } from '../../../../js/secciones';
import useIsInView from '../../../hooks/useIsInView';

const Skills = () => {

    const { referencia } = useIsInView(secciones.SKILLS, secciones.FORMACION);


    return (
        <section className='skills' ref={ referencia }>
            <TituloSeccion titulo='Skills'></TituloSeccion>
            <div className='skills__container'>
            
            </div>
        </section>
    );
}

export default Skills;
