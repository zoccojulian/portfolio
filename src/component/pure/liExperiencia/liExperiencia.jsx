import React from 'react';
import './liExperiencia.scss';

const LiExperiencia = ({foto}) => {

    const carpeta = '/img/experiencia/';
    let direccionFoto = `"${carpeta}pagina_pokemon.jpg"`;

    return (
        <li
            className='liExperiencia'
            style={{backgroundImage : `url(${direccionFoto})`}}
        >

        </li>
    );
}

export default LiExperiencia;
