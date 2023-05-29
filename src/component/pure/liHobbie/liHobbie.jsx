import React, {useEffect} from 'react';
import './liHobbie.scss';
import { motion } from 'framer-motion';

const LiHobbie = ({element, isView}) => {

    const style = {
        si:{
            color:'var(--color__hobbie-selecionado)',
            opacity: 1
        },
        no: {
            color:'var(--color__hobbie)',
            opacity: 0.5
        }
    }

    return (
        <motion.li 
            key={element.nombre}
            className='liHobbie'
            style={element.nombre == isView ? style.si : style.no}
        >
            {element.icon}
        </motion.li>
    );
}

export default LiHobbie;
