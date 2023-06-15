import React, { useState } from 'react';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import './skills.scss';
import { secciones } from '../../../../js/secciones';
import useIsInView from '../../../hooks/useIsInView';

import { CssIcon, HtlmIcon, JsIcon, Java, Git, GitHub, MySQLIcon, SassIcon, ReactIcon } from '../../../pure/iconsSkills'
 

const lista = [
    {nombre: 'Html', icon: <HtlmIcon></HtlmIcon>},
    {nombre: 'Css', icon: <CssIcon ></CssIcon>},
    {nombre: 'Sass', icon: <SassIcon></SassIcon>},
    {nombre: 'JavaScript', icon: <JsIcon></JsIcon>},
    {nombre: 'ReactJs', icon: <ReactIcon></ReactIcon>},
    {nombre: 'Java', icon: <Java></Java>},
    {nombre: 'MySQL', icon: <MySQLIcon></MySQLIcon>},
    {nombre: 'Git', icon: <Git></Git>},
    {nombre: 'GitHub', icon: <GitHub></GitHub>}
]

const Skills = () => {

    const { referencia } = useIsInView(secciones.SKILLS, secciones.FORMACION);

    const [hover, setHover] = useState(null)

    const cambio = ( estado ) => {
        if(hover !== estado){
            setHover(estado)
        }
            
    }

    return (
        <section className='skills' ref={ referencia }>
            <TituloSeccion titulo='Skills'></TituloSeccion>
            <div className='skills__container'>
                <ul style={{listStyle:'none', display:'flex', flexDirection:'row', flexWrap:'wrap'}} >
                    {lista.map((componente, key) => 
                        <li key={key}
                            style={{color: hover == key ? 'red' : 'white' , transition: 'all .5s'}}
                            onMouseOver={() => cambio(key)}
                            onMouseLeave={() => cambio(null)}
                        >
                            {componente.icon}
                        </li>
                    )}
                </ul>

            </div>
        </section>
    );
}

export default Skills;
