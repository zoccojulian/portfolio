import React, {useState} from 'react';
import './experiencia.scss';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import LiExperiencia from '../../../pure/liExperiencia/liExperiencia';

const Experiencia = () => {

    const listaExperiencia = [
        {
            foto: 'pagina_pokemon.jpg',
            nombre: 'Pokemon Page',
            tecno: 'React/Sass',
            descripcion: 'Página Realizada con React, Sass para estilos, MUI para algunos componentes. Utilizando la API PokemonApi'
        },
        {
            foto: 'simina.jpg',
            nombre: 'Simina Shoes',
            tecno: 'Html/Sass/js/Bodymoving',
            descripcion: 'Página comercial realizada para venta de zapatos. Actualmente fuera de linea. '
        },
        {
            foto: 'HotelAlura.png',
            nombre: 'Hotel Alura',
            tecno: 'Java/MySQL',
            descripcion: 'App de ecritorio creada con Java, con base de datos MySQL. Trabajo hecho para la formación en Oracle One Next Generation - ALURA'
        },
        {
            foto: 'Conversor.png',
            nombre: 'Conversor',
            tecno: 'Java',
            descripcion: 'App de ecritorio creada con Java, con base de datos MySQL. Trabajo hecho para la formación en Oracle One Next Generation - ALURA'
        },
        {
            foto: 'e-commerce.png',
            nombre: 'Alura Geek - e-commerce',
            tecno: 'Htlm/Css/Js',
            descripcion: 'Pagína de ventas de productos Geek'
        },
        {
            foto: 'Ahorcado.png',
            nombre: 'Juego Ahorcado',
            tecno: 'Htlm/Css/Js',
            descripcion: 'Juego Ahorcado'
        },
        {
            foto: 'Codificador.png',
            nombre: 'Codificador de texto',
            tecno: 'Htlm/Css/Js',
            descripcion: 'Codificador de texto'
        }
    ]

    const [selectId, setSelectId] = useState(null)

    return (
        <section className='experiencia'>
            <TituloSeccion titulo='Experiencia' ></TituloSeccion>
            <div className='experiencia__container'>
                <ul className='experiencia__lista'>
                {listaExperiencia.map((li, key) => (
                    <LiExperiencia experiencia={li} key={key}></LiExperiencia>
                ))}
                    
                </ul>
            </div>
        </section>
    );
}

export default Experiencia;
