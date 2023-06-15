import React, { useState } from 'react';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import './skills.scss';
import { secciones } from '../../../../js/secciones';
import useIsInView from '../../../hooks/useIsInView';
import CssIcon from '../../../pure/iconsSkills/cssIcon';
import HtlmIcon from '../../../pure/iconsSkills/htlmIcon';
import Git from '../../../pure/iconsSkills/git';
import GitHub from '../../../pure/iconsSkills/gitHub';
import Java from '../../../pure/iconsSkills/java';


const lista = [
    {nombre: 'Css', icon: <CssIcon ></CssIcon>},
    {nombre: 'Html', icon: <HtlmIcon></HtlmIcon>},
    {nombre: 'Git', icon: <Git></Git>},
    {nombre: 'GitHub', icon: <GitHub></GitHub>},
    {nombre: 'Java', icon: <Java></Java>}
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
                <ul style={{listStyle:'none', display:'flex', flexDirection:'row'}} >
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
