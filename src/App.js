import React, { useEffect, useRef, useState }  from 'react';
import { useSelector } from 'react-redux';
import './scss/theme.scss';
import './scss/app.scss';
import Header from './component/container/header/header';
import Inicio from './component/container/secciones/inicio/inicio';
import SobreMi from './component/container/secciones/sobreMi/sobreMi';
import { Element } from 'react-scroll';

function App() {	

	const themeDark = useSelector( (state) => state.theme.dark )

	return (
		<div className={ themeDark ? 'container theme--dark' : 'container theme' } >
			<Header className='header'></Header>
			<Element name='INICIO'>
				<Inicio></Inicio>
			</Element>
			<Element name='SOBRE_MI'>
				<SobreMi></SobreMi>
			</Element>
			<section
				style={{
					width: '100vw',
					height: '200vh',
					backgroundColor: 'red'
				}}
			></section>
		</div>
	);
}

export default App;
