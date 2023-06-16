import React, { useRef , useEffect} from 'react';
import './tituloSeccion.scss';
import { motion, useInView } from 'framer-motion';

const TituloSeccion = ( { titulo } ) => {

    const ref= useRef(null);
    const inView = useInView(ref);

    const variants = {
        visible: {
            opacity: 1,
            transform: 'translateX(0px)'
        },
        hidden:{
            opacity: 0,
            transform: 'translateX(100px)'
        }
    }

    // useEffect(() => {
    //    console.log(inView)
    // }, [inView])

    return (
        <motion.div
            className='tituloSeccion__container'
            ref={ref}
            variants={variants}
            animate={inView ? 'visible' : 'hidden'}
            transition={{delay: 0.3}}
        >
            <h2 className='tituloSeccion__titulo'>{ titulo }</h2>
        </motion.div>
    );
}

export default TituloSeccion;
