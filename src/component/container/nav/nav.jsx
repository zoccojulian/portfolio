import React from 'react';
import LiNav from '../../pure/liNav/LiNav';
import { secciones } from '../../../js/secciones';

//Style
import './nav.scss';



const Nav = () => {

    const list = [
        {nombre: 'INICIO', link: secciones.INICIO},
        {nombre: 'SOBRE MI', link:secciones.SOBRE_MI},
        {nombre: 'EXPERIENCIA', link:secciones.EXPERIENCIA},
        {nombre: 'FORMACIÓN', link:secciones.FORMACION},
        {nombre: 'SKILLS', link:secciones.SKILLS},
        {nombre: 'CONTACTO', link:secciones.CONTACTO},
    ]


    return (
        <nav>
            <ul>
                {list.map( (item, key) => (
                    <LiNav
                        key = {key}
                        nombre={item.nombre}
                        link={item.link}
                    ></LiNav>
                ) )}
            </ul>
        </nav>
    );
}

export default Nav;
