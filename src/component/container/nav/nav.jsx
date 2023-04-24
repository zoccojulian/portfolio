import React, { useState } from 'react';
import LiNav from '../../pure/liNav/LiNav';
import { secciones } from '../../../js/secciones';
import ButtonHamburguer from '../../pure/hamburguer/buttonHamburguer';
import { motion } from 'framer-motion';

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

    const [isOpen, setIsOpen] = useState(false);


    const variants = {
        open: {
            transform: 'translateX(0px)'
        },
        close: {
            transform: 'translateX(-200px)'
        }
    }

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <>
        <motion.nav 
            className='navSeccion'
            variants={ variants }
            animate={ isOpen ? 'open' : 'close' }
        >
            <ul className='navSeccion__lista'>
                {list.map( (item, key) => (
                    <LiNav
                        key = {key}
                        nombre={item.nombre}
                        link={item.link}
                    ></LiNav>
                ) )}
            </ul>
        </motion.nav>
        <ButtonHamburguer
                toggle= { toggle }
            ></ButtonHamburguer>
        </>
    );
}

export default Nav;
