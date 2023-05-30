import React, { useEffect , useState } from 'react';
import './liExperiencia.scss';
import { motion } from 'framer-motion';

const LiExperiencia = ({experiencia, setSelectId, selectId}) => {

    const {foto, nombre, tecno, descripcion} = experiencia;

    const carpeta = '/img/experiencia/';
    let direccionFoto = `"${carpeta}${foto}"`;

    const changeSelected = () => {
        console.log({...experiencia})
        setSelectId({...experiencia})
    }

    const [visible, setVisible] = useState()

    const variants = {
        hidden : {
            opacity: 0.1
        },
        visible:{
            opacity: 1
        }
    }

    useEffect(() => {

        if(selectId){
            setVisible(selectId.nombre)
        }else{
            setVisible(null)
        }

        console.log(visible)

    }, [selectId])

    return (
        <motion.li
            layout
            onClick={ () => changeSelected() }
            className='liExperiencia'
            style={{backgroundImage : `url(${direccionFoto})`}}
            variants={variants}
            animate={ visible == experiencia.nombre ? 'hidden' : 'visible'}
        >
            <div className='liExperiencia__textos'>
                <span className='liExperiencia__nombre'>{experiencia.nombre}</span>
            </div>
        </motion.li>
    );
}

export default LiExperiencia;
