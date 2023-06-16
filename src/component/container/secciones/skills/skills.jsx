import React, { useState } from 'react';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import './skills.scss';
import { secciones } from '../../../../js/secciones';
import useIsInView from '../../../hooks/useIsInView';

import { CssIcon, HtlmIcon, JsIcon, Java, Git, GitHub, MySQLIcon, SassIcon, ReactIcon, PremiereIcon, PhotoshopIcon, AdobeAfterEffectIcon, IllustratorIcon } from '../../../pure/iconsSkills'
import ListaSkills from '../../listaSkills/listaSkills';
 

const listaSkillsDev = [
    {nombre: 'Html', icon: <HtlmIcon></HtlmIcon>},
    {nombre: 'Css', icon: <CssIcon></CssIcon>},
    {nombre: 'Sass', icon: <SassIcon></SassIcon>},
    {nombre: 'JavaScript', icon: <JsIcon></JsIcon>},
    {nombre: 'ReactJs', icon: <ReactIcon></ReactIcon>},
    {nombre: 'Java', icon: <Java></Java>},
    {nombre: 'MySQL', icon: <MySQLIcon></MySQLIcon>},
    {nombre: 'Git', icon: <Git></Git>},
    {nombre: 'GitHub', icon: <GitHub></GitHub>}
]

const listaSkillsRealizador = [
    {nombre: 'Premiere', icon: <PremiereIcon></PremiereIcon>},
    {nombre: 'Photoshop', icon: <PhotoshopIcon></PhotoshopIcon>},
    {nombre: 'AfterEffect', icon: <AdobeAfterEffectIcon></AdobeAfterEffectIcon>},
    {nombre: 'Illustrator', icon: <IllustratorIcon></IllustratorIcon>}
]

const Skills = () => {

    const { referencia } = useIsInView(secciones.SKILLS, secciones.FORMACION);

    return (
        <section className='skills' ref={ referencia }>
            <TituloSeccion titulo='Skills'></TituloSeccion>
            <div className='skills__container'>
                <ListaSkills 
                    lista={ listaSkillsDev }
                    nombre= 'Desarrollo'
                />
                <ListaSkills
                    lista = { listaSkillsRealizador }
                    nombre = 'Audiovisual'
                />
            </div>
        </section>
    );
}

export default Skills;
