import React, { useState } from 'react';
import LiNav from '../../pure/liNav/LiNav';
import { secciones } from '../../../js/secciones';
import ButtonHamburguer from '../../pure/hamburguer/buttonHamburguer';
import { motion } from 'framer-motion';


//Style
import './nav.scss';

const breakPoint = 992;

const Nav = ( { width } ) => {

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
        closed: {
            transform: 'translateX(-300px)'
        }
    }

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <>
        <motion.nav 
            initial={ 'closed' }
            className= 'navSeccion'
            variants={ variants }
            animate={ !isOpen && (width<breakPoint) ? 'closed' : 'open'} 
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
            { width <=breakPoint &&
                <ButtonHamburguer
                    toggle= { toggle }
                    isOpen = { isOpen }
                ></ButtonHamburguer> 
            }
        </>
    );
}

export default Nav;
