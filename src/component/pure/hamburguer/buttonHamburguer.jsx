import React from 'react';
import './hamburguer.scss';
const ButtonHamburguer = ( { toggle } ) => {
    return (
        <div className='hamburguer'

            onClick={  toggle }
        >
            <div className='hamburguer__linea' ></div>
            <div className='hamburguer__linea' ></div>
            <div className='hamburguer__linea' ></div>
        </div>
    );
}

export default ButtonHamburguer;
