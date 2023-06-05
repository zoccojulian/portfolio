import React from 'react';
import { motion } from 'framer-motion';

import './experienciaSeleccionada.scss';

const ExperienciaSeleccionada = ( { selectId , setSelectId } ) => {
    return (
        <motion.div
            className='experiencia__seleccionada'
            onClick={() => setSelectId(null)}
            initial={{ opacity: 0, transform: 'translateX(100%)' }}
            animate={{ opacity: 1, transform: 'translateX(0%)' }}
            exit={{ opacity: 0, transform: 'translateX(100%)' }}
        >
            <div className='seleccion__container'>
                
                <div className='seleccion__imagen'>
                    <img src={selectId.foto} style={{ width: '100%' }}></img>
                </div>
                <div className='seleccion__descripcion'>
                    <h4 className='seleccion__nombre' >{selectId.nombre}</h4>
                    <div className='seleccion__links'>
                        <a className='seleccion__dir'
                            href= { selectId.demo } target='_blank'>Demo</a>
                        { selectId.repositorio && ( 
                            <a className='seleccion__dir'
                                href= { selectId.repositorio } target='_blank'>Repositorio</a>
                         ) }
                    </div>
                    <p className='seleccion__texto'>{selectId.descripcion}</p>
                    <ul className='seleccion__tecno'>
                        {selectId.tecno.map((item, key) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </motion.div>
    );
}

export default ExperienciaSeleccionada;
