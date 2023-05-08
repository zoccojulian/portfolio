import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSeccion } from '../../../store/slices/seccionSlice';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';


//Style
import './liNav.scss';

const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true, // linear “easeInQuint” “easeOutCubic” 
  offset: -10,
};

const LiNav = ( { nombre, link } ) => {

    const enSeccion = useSelector ( ( state ) => state.secciones.seccion )
    const dispatch = useDispatch();

    const irASeccion = () => {
        scroller.scrollTo(link, scrollType);

        //Esto cambiaba el estado del redux secciones. Pero ahora se cambia desde
        //el scroll de cada seccion. 
        // dispatch( setSeccion(link) )
    }

    const variants = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      };



    return (
        <motion.li 
            className='list__item' 
            onClick={ () => irASeccion()}
            variants = { variants }
        > 
            <h3 className='list__item-titulo'> { nombre } </h3>
            { enSeccion === link &&
                (<motion.div className='list__item-line' layoutId='seccion'></motion.div>)
            }
        </motion.li>
    );
}

export default LiNav;
