import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import './scss/theme.scss';
import './scss/app.scss';
import Header from './component/container/header/header';

function App() {	

	const themeDark = useSelector( (state) => state.theme.dark )

	return (
		<div className={ themeDark ? 'container theme--dark' : 'container theme' } >
			<Header className='header'></Header>
			<div style={{width:'100%'}}>
				<h1 className='titulo' style={{width:'100%'}}>
					TEXTO PRINCIPAL
				</h1>
				<p className='texto' style={{width:'100%'}}> vfsnjfhop´fjojf hdsjgfnduio fdhnjgifdshugfjdai hgfidsgdnjlfgaui ufdhugfd ugd </p>
			</div>
		</div>
	);
}

export default App;
