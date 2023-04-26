import React from 'react';
import DarkModeButton from '../../pure/darkModeButton/DarkModeButton';
import Nav from '../nav/nav';
import useScreenSize from '../../hooks/useResize';

//Style
import './header.scss';

const Header = () => {

    // Hook para obtener cambios en el ancho de la página
    const { width } = useScreenSize();

    return (
        <header className= 'header' >
            <Nav width={ width } ></Nav>
                <DarkModeButton></DarkModeButton>
        </header>
    );
}

export default Header;
