import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__tecnologias'>
                <ul className='footer__tecnologias-lista'>
                    <li className='footer__tecnologias-item'>
                        <a href='https://es.react.dev/' target='_blank' >ReactJs</a>
                    </li>
                    <li className='footer__tecnologias-item'>
                        <a href='https://www.framer.com/motion/' target='_blank' >Motion Framer</a>
                    </li>
                    <li className='footer__tecnologias-item'>
                        <a href='https://mui.com/' target='_blank' >MUI</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
