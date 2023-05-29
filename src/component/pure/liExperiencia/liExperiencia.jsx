import React from 'react';
import './liExperiencia.scss';

const LiExperiencia = ({experiencia}) => {

    const {foto, nombre, tecno, descripcion} = experiencia;

    const carpeta = '/img/experiencia/';
    let direccionFoto = `"${carpeta}${foto}"`;

    return (
        <li
            className='liExperiencia'
            style={{backgroundImage : `url(${direccionFoto})`}}
        >
        </li>
    );
}

export default LiExperiencia;
