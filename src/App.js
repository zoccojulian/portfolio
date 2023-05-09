import React, { useEffect, useRef, useState }  from 'react';
import { useSelector } from 'react-redux';
import './scss/theme.scss';
import './scss/app.scss';
import Header from './component/container/header/header';
import Inicio from './component/container/secciones/inicio/inicio';
import SobreMi from './component/container/secciones/sobreMi/sobreMi';
import { Element } from 'react-scroll';
import SectionPrueba from './component/sectionPrueba';
import { secciones } from './js/secciones';

function App() {	

	const themeDark = useSelector( (state) => state.theme.dark );


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
				<SectionPrueba seccion={secciones.EXPERIENCIA} ></SectionPrueba>
			</Element>
			<Element name={secciones.FORMACION}>
				<SectionPrueba seccion={secciones.FORMACION} ></SectionPrueba>
			</Element>
		</div>
	);
}

export default App;
