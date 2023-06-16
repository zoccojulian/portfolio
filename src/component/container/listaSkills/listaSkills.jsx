import React, { useState } from 'react';
import './listaSkills.scss';

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
                        style={{ color: hover == key ? 'red' : 'var(--color__hobbie-selecionado)', transition: 'all .5s' }}
                        onMouseOver={() => cambio(key)}
                        onMouseLeave={() => cambio(null)}
                    >
                        {componente.icon}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ListaSkills;
