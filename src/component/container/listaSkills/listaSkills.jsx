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
                            color: hover == key ? 'red' : 'var(--color__hobbie-selecionado)',
                            transition: 'all .5s'
                        }}
                        
                        onMouseOver={() => cambio(key)}
                        onMouseLeave={() => cambio(null)}
                    >
                        <div 
                            className='item__background'
                            style={ { display: hover == key ? 'block' : ' none', animation: 'all 1s'} }
                        ></div>
                        {componente.icon}
                        <motion.div
                            className='item__nombre-container'
                            animate ={ hover == key ? {transform: 'translateX(0px)', display:'block'} : {transform: 'translateX(-100px)', display:'none'}}
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
