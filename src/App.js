import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/slices/themeSlice';
import './scss/app.scss'
import Nada from './component/Nada';
import DarkModeButton from './component/darkModeButton/DarkModeButton';

function App() {	

	const themeDark = useSelector( (state) => state.theme.dark )
	const dispatch = useDispatch();

	return (
		<div className={ themeDark ? 'container theme--dark' : 'container theme' } >
			<h1 className='titulo' >
				TEXTO PRINCIPAL
			</h1>
			<p className='texto'> vfsnjfhop´fjojf hdsjgfnduio fdhnjgifdshugfjdai hgfidsgdnjlfgaui ufdhugfd ugd </p>
            <DarkModeButton></DarkModeButton>
			<button
                onClick={ () => dispatch( toggleTheme()) }
            >cambiar</button>
			<Nada></Nada>
		</div>
	);
}

export default App;
