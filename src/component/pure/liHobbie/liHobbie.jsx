import React, {useEffect} from 'react';
import './liHobbie.scss';

const LiHobbie = ({element, isView}) => {

    const style = {
        si:{
            color:'var(--color__hobbie-selecionado)',
            opacity: 1
        },
        no: {
            color:'var(--color__hobbie)',
            opacity: 0.5
        }
    }

    return (
        <li 
            className='liHobbie'
            style={element.nombre == isView ? style.si : style.no}
        >
            {element.icon}
        </li>
    );
}

export default LiHobbie;
