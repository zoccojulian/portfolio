import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import './scss/theme.scss';
import './scss/app.scss';
import Header from './component/container/header/header';
import Typewriter from "typewriter-effect";
import Inicio from './component/container/secciones/inicio/inicio';


function App() {	

	const themeDark = useSelector( (state) => state.theme.dark )

	return (
		<div className={ themeDark ? 'container theme--dark' : 'container theme' } >
			<Header className='header'></Header>
			{/* <div style={{width:'100%'}}>
				<Typewriter
					options={{
						strings: [
								'Hello',
								'I´m Developer',
								'and Video Editor'
							],
						autoStart: true,
						loop: true,
						deleteSpeed: 100,
						pauseFor: 3000
					}}
				/>
			</div> */}

			<Inicio></Inicio>
		</div>
	);
}

export default App;
