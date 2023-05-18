import React, {useEffect} from 'react';
import './liHobbie.scss';

const LiHobbie = ({element, isView}) => {

    return (
        <li 
            className='liHobbie'
            style={{color: element.nombre == isView && 'red'}}
        >
            {element.icon}
        </li>
    );
}

export default LiHobbie;
