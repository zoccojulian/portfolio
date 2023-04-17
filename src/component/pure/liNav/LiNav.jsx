import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSeccion } from '../../../store/slices/seccionSlice';
import { motion } from 'framer-motion';


//Style
import './liNav.scss';


const LiNav = ( { nombre, link } ) => {

    const enSeccion = useSelector ( ( state ) => state.secciones.seccion )
    const dispatch = useDispatch();

    const irASeccion = () => {
        dispatch( setSeccion(link) )
    }
    return (
        <li className='list__item' 
            onClick={ () => irASeccion() }
        > 
            <h3 className='list__item-titulo'> { nombre } </h3>
            { enSeccion === link &&
                (<motion.div className='list__item-line' layoutId='seccion'></motion.div>)
            }
        </li>
    );
}

export default LiNav;
