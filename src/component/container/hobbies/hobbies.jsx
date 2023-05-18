import React, { useState, useEffect } from 'react';
import './hobbies.scss';

import PoolIcon from '@mui/icons-material/Pool';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import TvIcon from '@mui/icons-material/Tv';

import LiHobbie from '../../pure/liHobbie/liHobbie';


const Hobbies = () => {

    const listaIcons = [
        {nombre: 'Natación', icon: <PoolIcon className='mui__icon' ></PoolIcon>},
        {nombre: 'Fotografía', icon: <CameraAltIcon className='mui__icon' ></CameraAltIcon>},
        {nombre: 'VideoJuegos', icon: <VideogameAssetIcon className='mui__icon' ></VideogameAssetIcon>},
        {nombre: 'Música', icon: <HeadphonesIcon className='mui__icon' ></HeadphonesIcon>},
        {nombre: 'Series', icon: <TvIcon className='mui__icon' ></TvIcon>}
    ]

    const [hobbie, setHobbie] = useState({posicion: 0,  select: listaIcons[0]});



    const nuevoEstado = ( estadoAnterior) => {

        console.log(listaIcons.length == estadoAnterior.posicion+1)

        if(listaIcons.length == estadoAnterior.posicion+1){
            console.log('termino')
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

    return (
        <div className='hobbies__container'>
            <h3 className='hobbies__titulo'>Hobbies</h3>
            <ul className='hobbies__lista'>
            {listaIcons.map((element, key)=>(
                <LiHobbie key={key} isView={hobbie.select}>{element.icon}</LiHobbie>
            ))}
            </ul>
            <h4>{hobbie.select.nombre}</h4>
        </div>
    );
}

export default Hobbies;
