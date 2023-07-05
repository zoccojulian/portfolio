import React, { useState , useEffect, useRef} from 'react';
import LiNav from '../../pure/liNav/LiNav';
import { secciones } from '../../../js/secciones';
import ButtonHamburguer from '../../pure/hamburguer/buttonHamburguer';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../../../store/slices/menuSlice';


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

    // const [isOpen, setIsOpen] = useState(false);

    const isOpen = useSelector((state) => state.menu.isOpen)
    const dispatch = useDispatch();

    const variants = {
        open: {
            transform: 'translateX(0px)',
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transform: 'translateX(-300px)'
        }
    }

    const toggle = () => {
        // setIsOpen((isOpen) => !isOpen)
        dispatch( setIsOpen(!isOpen) )
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
