import React from 'react';
import './hobbies.scss';

import PoolIcon from '@mui/icons-material/Pool';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LiHobbie from '../../pure/liHobbie/liHobbie';


const Hobbies = () => {


    const listaIcons = [
        (<PoolIcon></PoolIcon>),
        (<CameraAltIcon></CameraAltIcon>)
    ]


    return (
        <div className='hobbies__container'>
            <h3>Hobbies</h3>
            <ul>
            </ul>
        </div>
    );
}

export default Hobbies;
