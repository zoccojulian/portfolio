import React, { useRef, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import cvPdf from '../../../../assets/cv/zoccojulian_cv.pdf';
import useIsInView from '../../../hooks/useIsInView';

//Estilos
import './inicio.scss';
import { secciones } from '../../../../js/secciones';


const Inicio = () => {


    const { referencia } = useIsInView(secciones.INICIO)

    return (
        <section className='inicio' ref={referencia}>
            <div className='inicio__foto-container'>
                <div className='inicio__foto-fondo'></div>
                <div className='inicio__foto'>
                    <img 
                        className='inicio__foto-front'
                        src={require('../../../../assets/foto/foto_01_c.png')}
                        alt='foto_julianZocco_perfil'
                    ></img>
                </div>
            </div>
            <div className='inicio__textos'>
                <h1 className='inicio__nombre'>Julian <b>Zocco</b></h1>
                <Typewriter
                        options={{
                            strings: [
                                    'Desarrollador',
                                    'Front End',
                                    'Back End',
                                    'Realizador Audiovisual'
                                ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 100,
                            pauseFor: 3000
                        }}
                    />
                    <div className='inicio__links'>
                        <a href='https://www.linkedin.com/in/julian-zocco/' target='_blank' >
                            <LinkedInIcon className='inicio__links-icon' />
                        </a>
                        <a href='https://github.com/zoccojulian' target='_blank'>
                            <GitHubIcon className='inicio__links-icon' />
                        </a>
                        <a href={ cvPdf }  target="_blank" rel="noopener noreferrer" download="zoccojulian_cv.pdf">
                            <PictureAsPdfIcon className='inicio__links-icon' />
                        </a>
                    </div>
            </div>
            
        </section>
    );
}

export default Inicio;
