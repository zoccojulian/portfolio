import React from 'react';
import './tituloSeccion.scss';

const TituloSeccion = ( { titulo } ) => {

    return (
        <div className='tituloSeccion__container'>
            <h2 className='tituloSeccion__titulo'>{ titulo }</h2>
        </div>
    );
}

export default TituloSeccion;
