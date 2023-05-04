import React from 'react';
import Typewriter from "typewriter-effect";

//Estilos
import './inicio.scss';

const Inicio = () => {


    return (
        <section className='inicio'>
            <div className='inicio__foto-container'>
                <div className='inicio__foto-fondo'></div>
                <div className='inicio__foto'>
                    <img 
                        className='inicio__foto-front'
                        src={require('../../../../assets/foto/foto_01_c.png')} 
                    ></img>
                </div>
            </div>
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
        </section>
    );
}

export default Inicio;
