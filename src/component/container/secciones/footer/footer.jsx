import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__tecnologias'>
                <ul className='footer__tecnologias-lista'>
                    <li className='footer__tecnologias-item'>
                        <a>ReactJs</a>
                    </li>
                    <li className='footer__tecnologias-item'>
                        <a>Motion Framer</a>
                    </li>
                    <li className='footer__tecnologias-item'>
                        <a>MUI</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
