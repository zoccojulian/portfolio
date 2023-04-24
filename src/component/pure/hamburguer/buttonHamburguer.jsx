import React from 'react';
import './hamburguer.scss';
import { motion, transform } from 'framer-motion';

const ButtonHamburguer = ( { toggle, isOpen } ) => {



    return (
        <motion.div className='hamburguer'
            onClick={  toggle }
        >
            <motion.div className='hamburguer__linea'
                variants={{
                    open:{
                        transform: 'rotate(45deg) translateY(5px) translateX(5px)',
                        
                    },
                    closed:{
                        transform: 'rotate(0deg)'
                    }
                }}
                animate={ isOpen ? 'open' : 'close' }
            ></motion.div>
            <motion.div className='hamburguer__linea'
                variants={{
                    open: { opacity: 0},
                    closed: { opacity: 1}
                }}
                animate={ isOpen ? 'open' : 'close' }
            ></motion.div>
            <motion.div className='hamburguer__linea' 
                variants={{
                    open:{
                        transform: 'rotate(-45deg) translateY(-5px) translateX(5px)',
                        
                    },
                    closed:{
                        transform: 'rotate(0deg)'
                    }
                }}
                animate={ isOpen ? 'open' : 'close' }
            ></motion.div>
        </motion.div>
    );
}

export default ButtonHamburguer;
