import React from 'react';
import './liFormacion.scss';

const LiFormacion = ( { formacion } ) => {

    const {institucion} = formacion;

    return (
        <li className='liFormacion'>
            <div className='liFormacion__foto-container'>
                <img 
                    src={formacion.foto}
                    alt= { formacion.foto.match(/\/([^/]+)\.\w+$/)[1] }
                ></img>
            </div>
            <div className='liFormacion__texto-container'>
                <h3 className='liformacion__texto-titulo liFormacion__textos'>{ formacion.titulo }</h3>
                <h4 className='liformacion__texto-institucion liFormacion__textos'>{ formacion.institucion }</h4>
                <h4 className='liformacion__texto-periodo liFormacion__textos'>{ formacion.periodo }</h4>
            </div>
        </li>
    );
}

export default LiFormacion;
