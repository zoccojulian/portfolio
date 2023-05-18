import React, {useEffect} from 'react';
import './liHobbie.scss';

const LiHobbie = ({children, isView}) => {

    return (
        <li className='liHobbie'>
            {children}
        </li>
    );
}

export default LiHobbie;
