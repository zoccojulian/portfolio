import React, { useState } from 'react';
import './listaSkills.scss';
import { motion } from 'framer-motion';

const ListaSkills = ({ lista , nombre }) => {

    const [hover, setHover] = useState(null)

    const cambio = (estado) => {
        if (hover !== estado) {
            setHover(estado)
        }

    }


    return (

        <div className='lista__skills-container'>
            <div className='skills__nombre-container'>
                <h3 className='skills__nombre'>{ nombre }</h3>
            </div>
            <ul
                className='lista__skills'
            >
                {lista.map((componente, key) =>
                    <li key={key}
                        className='lista__skills-item'
                        style={{ 
                            color: hover == key ? 'var(--color__skill-seleccionado)' : 'var(--color__skill)',
                            transition: 'all .5s'
                        }}
                        
                        onMouseOver={() => cambio(key)}
                        onMouseLeave={() => cambio(null)}
                    >
                        <motion.div 
                            className='item__background'
                            animate ={ hover == key ? {transform: 'translateY(0px)', visibility:'visible', opacity:1} : {transform: 'translateY(-20px)', visibility:'hidden', opacity:0}}
                            transition={{duration: .5}}
                        ></motion.div>
                        <motion.div 
                            className='skillIcon__container'
                            animate ={ hover == key ? {transform: 'translateY(-20px)'} : {transform: 'translateX(0px)'}}
                            transition={{duration: .5}}
                        >
                        
                            {componente.icon}
                        </motion.div>
                        <motion.div
                            layout
                            className='item__nombre-container'
                            animate ={ hover == key ? {transform: 'translateX(0px)', visibility:'visible', opacity:1} : {transform: 'translateX(50px)', visibility:'hidden', opacity:0}}
                            transition={{duration: .5}}
                        >
                            <span className='item__nombre'>{ componente.nombre }</span>
                        </motion.div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ListaSkills;
