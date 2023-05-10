import React, { useEffect, useRef, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './scss/theme.scss';
import './scss/app.scss';
import Header from './component/container/header/header';
import Inicio from './component/container/secciones/inicio/inicio';
import SobreMi from './component/container/secciones/sobreMi/sobreMi';
import { Element } from 'react-scroll';
import SectionPrueba from './component/sectionPrueba';
import { secciones } from './js/secciones';
import { useScroll , useMotionValueEvent } from 'framer-motion';
import { setIsUp, setScroll } from './store/slices/scrollSlice';

function App() {	

	const themeDark = useSelector( (state) => state.theme.dark );
	const isUp = useSelector((state)=> state.scroll.isUp)

	const { scrollY } = useScroll();
	const dispatch = useDispatch();
	const [scrollAnterior, setScrollAnterior] = useState(0) //Chequear con que tiene que iniciar
	useMotionValueEvent(scrollY, 'change', (ev) => {
		
		if(scrollAnterior < ev){
           dispatch(setIsUp(false))
        }else{
            dispatch(setIsUp(true))
        }

        setScrollAnterior(ev)
		dispatch( setScroll(ev) );
	})

	

	return (
		<div className={ themeDark ? 'container theme--dark' : 'container theme' } >
			<Header className='header'></Header>
			<Element name={secciones.INICIO}>
				<Inicio></Inicio>
			</Element>
			<Element name={secciones.SOBRE_MI}>
				<SobreMi></SobreMi>
			</Element>
			<Element name={secciones.EXPERIENCIA}>
				<SectionPrueba seccion={secciones.EXPERIENCIA} anterior={secciones.SOBRE_MI}color='red'></SectionPrueba>
			</Element>
			<Element name={secciones.FORMACION}>
				<SectionPrueba seccion={secciones.FORMACION} anterior={secciones.EXPERIENCIA}color='blue'></SectionPrueba>
			</Element>
		</div>
	);
}

export default App;
