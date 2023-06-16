import React, { useState, useEffect, useRef } from 'react';
import './hobbies.scss';
import { motion , AnimatePresence, useInView} from 'framer-motion';

import PoolIcon from '@mui/icons-material/Pool';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import TvIcon from '@mui/icons-material/Tv';

import LiHobbie from '../../pure/liHobbie/liHobbie';


const Hobbies = () => {

    const hobbieRef = useRef(null)
    const hobbieView = useInView(hobbieRef)

    const variantsHobbie = {
        visible:{
            transform: 'translateX(0%)',
            opacity:1
        },
        hidden:{
            transform: 'translateX(100%)',
            opacity:0
        }
    }

    const listaIcons = [
        {nombre: 'Natación', icon: <PoolIcon className='mui__icon' ></PoolIcon>},
        {nombre: 'Fotografía', icon: <CameraAltIcon className='mui__icon' ></CameraAltIcon>},
        {nombre: 'VideoJuegos', icon: <VideogameAssetIcon className='mui__icon' ></VideogameAssetIcon>},
        {nombre: 'Música', icon: <HeadphonesIcon className='mui__icon' ></HeadphonesIcon>},
        {nombre: 'Series', icon: <TvIcon className='mui__icon' ></TvIcon>}
    ]

    const [hobbie, setHobbie] = useState({posicion: 0,  select: listaIcons[0]});



    const nuevoEstado = ( estadoAnterior) => {

        if(listaIcons.length == estadoAnterior.posicion+1){
            return { posicion:0, select: listaIcons[0]}
        }else{
            return { posicion: estadoAnterior.posicion + 1 , select: listaIcons[estadoAnterior.posicion + 1] }
        }

    }



    const cambioHobbie = () => {
        setHobbie( (anterior) => nuevoEstado(anterior) )
    }

    useEffect(() => {
        const id = setInterval(cambioHobbie,3000)
        return () => {
            clearInterval(id)
        }
    },[])

    // useEffect(() => {
    //     console.log(hobbieView)
    // },[hobbieView])

    return (
        <motion.div
            className='hobbies__container'
            variants={variantsHobbie}
            animate={hobbieView ? 'visible' : 'hidden'}
            transition={{duration: 1, delay: 0.3}}
            ref={hobbieRef}
        >
            <h3 className='hobbies__titulo'>Hobbies</h3>
            <div className='hobbie__lista-container'> 
                <ul className='hobbies__lista'>
                {listaIcons.map((element, key)=>(
                    <LiHobbie key={key} isView={hobbie.select.nombre} element={element}></LiHobbie>
                ))}
                </ul>
                <AnimatePresence mode='wait' >
                    <motion.h4 
                        className='hobbie__nombre'
                        key={hobbie.select.nombre && hobbie.select.nombre}
                        initial={{ transform: 'translateY(10px)', opacity: 0 }}
                        animate={{ transform: 'translateY(0px)', opacity: 1 }}
                        exit={{ transform: 'translateY(-10px)', opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {hobbie.select.nombre}
                    </motion.h4>
                </AnimatePresence>

            </div>
            
        </motion.div>
    );
}

export default Hobbies;
