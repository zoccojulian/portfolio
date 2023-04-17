import React from 'react';
import DarkModeButton from '../../pure/darkModeButton/DarkModeButton';
import Nav from '../nav/nav';


//Style
import './header.scss';



const Header = () => {
    return (
        <header className='header'>
        <Nav></Nav>
            <DarkModeButton></DarkModeButton>
        </header>
    );
}

export default Header;
