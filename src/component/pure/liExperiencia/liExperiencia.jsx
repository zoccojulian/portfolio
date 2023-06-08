import React, { useEffect , useState , useRef} from 'react';
import './liExperiencia.scss';
import { motion, useInView } from 'framer-motion';

const LiExperiencia = ({experiencia, setSelectId, selectId}) => {

    const changeSelected = () => {
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


    }, [selectId])

    return (
        <motion.li
            layout
            onClick={ () => changeSelected() }
            className='liExperiencia'
            style={{backgroundImage : `url(${experiencia.foto})`}}
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





// style={{backgroundImage : `url(${direccionFoto})`, transform: isInView ? "none" : "translateX(-200px)",
// opacity: isInView ? 1 : 0,
// transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}