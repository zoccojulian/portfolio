import React from 'react';
import './liFormacion.scss';

const LiFormacion = ( { formacion } ) => {

    return (
        <li className='liFormacion'>
            <div className='liFormacion__foto-container'>
                <img src={formacion.foto}></img>
            </div>
            <div className='liFormacion__texto-container'>
                <h4 className='liformacion__texto-titulo'>{ formacion.titulo }</h4>
                <span className='liformacion__texto-intitucion'>{ formacion.institucion }</span>
                <span className='liformacion__texto-periodo'>{ formacion.periodo }</span>
            </div>
        </li>
    );
}

export default LiFormacion;
