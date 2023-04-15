import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/slices/themeSlice';
import './scss/app.scss'
import DarkModeButton from './component/darkModeButton/DarkModeButton';

function App() {	

	const themeDark = useSelector( (state) => state.theme.dark )
	const dispatch = useDispatch();

	return (
		<div className={ themeDark ? 'container theme--dark' : 'container theme' } >
			<DarkModeButton></DarkModeButton>
			<h1 className='titulo' >
				TEXTO PRINCIPAL
			</h1>
			<p className='texto'> vfsnjfhop´fjojf hdsjgfnduio fdhnjgifdshugfjdai hgfidsgdnjlfgaui ufdhugfd ugd </p>
		</div>
	);
}

export default App;
