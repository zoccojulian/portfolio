import React from 'react';
import { motion } from 'framer-motion';
import useIsInView from './hooks/useIsInView';
import { secciones } from '../js/secciones';


const SectionPrueba = ({seccion, anterior,  color}) => {

	const { referencia } = useIsInView(seccion, anterior);

    return (
        <motion.section
				ref={referencia}
				style={{
					width: '100vw',
					height: '200vh',
					backgroundColor: color 
				}}
			></motion.section>
    );
}

export default SectionPrueba;
