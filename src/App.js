import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './scss/theme.scss';
import './scss/app.scss';
import Header from './component/container/header/header';
import Inicio from './component/container/secciones/inicio/inicio';
import SobreMi from './component/container/secciones/sobreMi/sobreMi';
import { Element } from 'react-scroll';
import { secciones } from './js/secciones';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { setIsUp, setScroll } from './store/slices/scrollSlice';
import Experiencia from './component/container/secciones/experiencia/experiencia';
import Formacion from './component/container/secciones/formacion/formacion';
import Skills from './component/container/secciones/skills/skills';
import Contacto from './component/container/secciones/contacto/contacto';
import { setIsOpen } from './store/slices/menuSlice';

function App() {

	const themeDark = useSelector((state) => state.theme.dark);
	const isUp = useSelector((state) => state.scroll.isUp)
	const isMenuOpen = useSelector((state) => state.menu.isOpen)

	const { scrollY } = useScroll();
	const dispatch = useDispatch();
	const [scrollAnterior, setScrollAnterior] = useState(0) //Chequear con que tiene que iniciar
	useMotionValueEvent(scrollY, 'change', (ev) => {

		if (scrollAnterior < ev) {
			dispatch(setIsUp(false))
		} else {
			dispatch(setIsUp(true))
		}

		setScrollAnterior(ev)
		dispatch(setScroll(ev));
	})



	const handleOutsideClick = (e) => {
		if (isMenuOpen && !e.target.closest('.navSeccion') && !e.target.closest('.hamburguer')) {
			dispatch(setIsOpen(false)); // Dispatch de la acción closeMenu para cerrar el menú
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [isMenuOpen]);



	return (
		<div className={themeDark ? 'container theme--dark' : 'container theme'} >
			<Header className='header'></Header>
			<Element name={secciones.INICIO} className='element'>
				<Inicio></Inicio>
			</Element>
			<Element name={secciones.SOBRE_MI} className='element'>
				<SobreMi></SobreMi>
			</Element>
			<Element name={secciones.EXPERIENCIA} className='element'>
				<Experiencia></Experiencia>
			</Element>
			<Element name={secciones.FORMACION} className='element'>
				<Formacion></Formacion>
			</Element>
			<Element name={secciones.SKILLS} className='element'>
				<Skills></Skills>
			</Element>
			<Element name={secciones.CONTACTO} className='element'>
				<Contacto></Contacto>
			</Element>
		</div>
	);
}

export default App;
