import React, {useRef, useState} from 'react';
import './experiencia.scss';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import LiExperiencia from '../../../pure/liExperiencia/liExperiencia';
import { motion , AnimatePresence, useInView} from 'framer-motion';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import { useExperienciaAnimation } from '../../../hooks/useExperienciaAnimation';

const listaExperiencia = [
    {
        id:0,
        foto: '/img/experiencia/Codificador.png',
        nombre: 'Codificador de texto',
        tecno: ['Html', 'Css', 'Js'],
        descripcion: 'Codificador de texto'
    },
    {
        id:1,
        foto: '/img/experiencia/Ahorcado.png',
        nombre: 'Juego Ahorcado',
        tecno: ['Html', 'Css', 'Js'],
        descripcion: 'Juego Ahorcado'
    },
    {
        id:2,
        foto: '/img/experiencia/e-commerce.png',
        nombre: 'Alura Geek - e-commerce',
        tecno: ['Html', 'Css', 'Js'],
        descripcion: 'Pagína de ventas de productos Geek'
    },
    {
        id:3,
        foto: '/img/experiencia/Conversor.png',
        nombre: 'Conversor',
        tecno: ['Java'],
        descripcion: 'App de ecritorio creada con Java, con base de datos MySQL. Trabajo hecho para la formación en Oracle One Next Generation - ALURA'
    },
    {
        id:4,
        foto: '/img/experiencia/HotelAlura.png',
        nombre: 'Hotel Alura',
        tecno: ['Java', 'MySQL'],
        descripcion: 'App de ecritorio creada con Java, con base de datos MySQL. Trabajo hecho para la formación en Oracle One Next Generation - ALURA'
    },
    {
        id:5,
        foto: '/img/experiencia/simina.jpg',
        nombre: 'Simina Shoes',
        tecno: ['Html', 'Sass', 'Js', 'Bodymovin'],
        descripcion: 'Página comercial realizada para venta de zapatos. Actualmente fuera de linea. '
    },
    {
        id:6,
        foto: '/img/experiencia/pagina_pokemon.jpg',
        nombre: 'Pokemon Page',
        tecno: ['ReactJs', 'Sass'],
        descripcion: 'Página Realizada con React, Sass para estilos, MUI para algunos componentes. Utilizando la API PokemonApi'
    }

]

const listaReverse = listaExperiencia.reverse();

const Experiencia = () => {

    const { referencia } = useIsInView(secciones.EXPERIENCIA, secciones.SOBRE_MI)

    const [selectId, setSelectId] = useState(null)

    

    const scope = useExperienciaAnimation()

    return (
        <motion.section 
            className='experiencia'
            ref={referencia}
        >
            <TituloSeccion titulo='Experiencia' ></TituloSeccion>
            <motion.div 
                className='experiencia__container'
            >
                <motion.ul 
                    className='experiencia__lista'
                    ref={scope}
                >
                {listaReverse.map((li, key) => (
                    <LiExperiencia experiencia={li} key={key} setSelectId={setSelectId} selectId={selectId}></LiExperiencia>
                ))}
                </motion.ul>
                <AnimatePresence>
                    {selectId && (
                        <motion.div
                            className='experiencia__seleccionada'
                            onClick={() => setSelectId(null)}
                            initial={{opacity:0, transform: 'translateX(100%)'}}
                            animate={{opacity:1, transform: 'translateX(0%)'}}
                            exit={{opacity:0, transform: 'translateX(100%)'}}
                        >
                            <div className='seleccion__container'>
                                <div className='seleccion__imagen'>
                                    <img src={selectId.foto} style={{width:'100%'}}></img>
                                </div>
                                <div className='seleccion__descripcion'>
                                    <h4>{selectId.nombre}</h4>
                                    <p>{selectId.descripcion}</p>
                                    <ul className='seleccion__tecno'>
                                        {selectId.tecno.map((item, key) => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                                
                        </motion.div>
                    )}
                </AnimatePresence>
                
                
            </motion.div>
        </motion.section>
    );
}

export default Experiencia;
