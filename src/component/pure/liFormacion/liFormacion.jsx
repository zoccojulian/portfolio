import React from 'react';
import './liFormacion.scss';

const LiFormacion = ( { formacion } ) => {

    const {institucion} = formacion;

    return (
        <li className='liFormacion'>
            <div className='liFormacion__foto-container'>
                <img src={formacion.foto}></img>
            </div>
            <div className='liFormacion__texto-container'>
                <h4 className='liformacion__texto-titulo liFormacion__textos'>{ formacion.titulo }</h4>
                <h5 className='liformacion__texto-institucion liFormacion__textos'>{ formacion.institucion }</h5>
                <h5 className='liformacion__texto-periodo liFormacion__textos'>{ formacion.periodo }</h5>
            </div>
        </li>
    );
}

export default LiFormacion;
