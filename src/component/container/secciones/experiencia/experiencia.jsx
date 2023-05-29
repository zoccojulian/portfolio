import React, {useState} from 'react';
import './experiencia.scss';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import LiExperiencia from '../../../pure/liExperiencia/liExperiencia';

const Experiencia = () => {


    const [selectId, setSelectId] = useState(null)

    return (
        <section className='experiencia'>
            <TituloSeccion titulo='Experiencia' ></TituloSeccion>
            <div className='experiencia__container'>
                <ul className='experiencia__lista'>
                    <LiExperiencia foto='pagina_pokemon.jpg'></LiExperiencia>
                </ul>
            </div>
        </section>
    );
}

export default Experiencia;
