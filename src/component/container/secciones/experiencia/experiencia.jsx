import React, { useState } from 'react';
import './experiencia.scss';
import TituloSeccion from '../../../pure/tituloSeccion/tituloSeccion';
import LiExperiencia from '../../../pure/liExperiencia/liExperiencia';
import { motion , AnimatePresence, useInView} from 'framer-motion';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import { useExperienciaAnimation } from '../../../hooks/useExperienciaAnimation';
import ExperienciaSeleccionada from '../../../pure/experienciaSeleccionada/experienciaSeleccionada';


const listaExperiencia = [
    {
        id:0,
        foto: '/img/experiencia/Codificador.png',
        nombre: 'Codificador de texto',
        tecno: ['Html', 'Css', 'Js'],
        descripcion: 'Codificador de texto',
        demo: 'https://zoccojulian.github.io/challenge-01-julian/',
        repositorio: 'https://github.com/zoccojulian/challenge-01-julian'
    },
    {
        id:1,
        foto: '/img/experiencia/Ahorcado.png',
        nombre: 'Juego Ahorcado',
        tecno: ['Html', 'Css', 'Js'],
        descripcion: 'Juego Ahorcado',
        demo: 'https://zoccojulian.github.io/challenge-02-julian/',
        repositorio: 'https://github.com/zoccojulian/challenge-02-julian'
    },
    {
        id:2,
        foto: '/img/experiencia/e-commerce.png',
        nombre: 'Alura Geek - e-commerce',
        tecno: ['Html', 'Css', 'Js'],
        descripcion: 'Pagína de ventas de productos Geek',
        demo: 'https://zoccojulian.github.io/challenge-4-julian/',
        repositorio: 'https://github.com/zoccojulian/challenge-4-julian'
    },
    {
        id:3,
        foto: '/img/experiencia/Conversor.png',
        nombre: 'Conversor',
        tecno: ['Java'],
        descripcion: 'App de ecritorio creada con Java, con base de datos MySQL. Trabajo hecho para la formación en Oracle One Next Generation - ALURA',
        demo: 'https://replit.com/@JulianZocco/Conversor#Main.java',
        repositorio: 'https://github.com/zoccojulian/challenge-05-julian-Conversor-Java'
    },
    {
        id:4,
        foto: '/img/experiencia/HotelAlura.png',
        nombre: 'Hotel Alura',
        tecno: ['Java', 'MySQL'],
        descripcion: 'App de ecritorio creada con Java, con base de datos MySQL. Trabajo hecho para la formación en Oracle One Next Generation - ALURA',
        demo: 'https://www.youtube.com/watch?v=f8xODoraSI4',
        repositorio: 'https://github.com/zoccojulian/Challenge-6-julian-HotelAlura'
    },
    {
        id:5,
        foto: '/img/experiencia/simina.jpg',
        nombre: 'Simina Shoes',
        tecno: ['Html', 'Sass', 'Js', 'Bodymovin'],
        descripcion: 'Página comercial realizada para venta de zapatos. Actualmente fuera de linea. ',
        demo: 'https://simina-page.netlify.app/',
        repositorio: 'https://github.com/zoccojulian/page_venta_calzado'
    },
    {
        id:6,
        foto: '/img/experiencia/pagina_pokemon.jpg',
        nombre: 'Pokemon Page',
        tecno: ['ReactJs', 'Sass'],
        descripcion: 'Página Realizada con React, Sass para estilos, MUI para algunos componentes. Utilizando la API PokemonApi',
        demo: 'https://zoccojulian-pokemon-page.netlify.app/',
        repositorio: 'https://github.com/zoccojulian/pokemon-page'
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
                        <ExperienciaSeleccionada 
                            selectId={selectId}
                            setSelectId={setSelectId}
                        ></ExperienciaSeleccionada>
                    )}
                </AnimatePresence>
                
                
            </motion.div>
        </motion.section>
    );
}

export default Experiencia;
