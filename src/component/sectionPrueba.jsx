import React from 'react';
import { motion } from 'framer-motion';
import useIsInView from './hooks/useIsInView';
import { secciones } from '../js/secciones';


const SectionPrueba = ({seccion}) => {



	

    return (
        <motion.section
				style={{
					width: '100vw',
					height: '300vh',
					backgroundColor: 'white'
				}}
			></motion.section>
    );
}

export default SectionPrueba;
