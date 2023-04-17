import React, { useEffect } from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import { useSelector , useDispatch} from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';

//Style
import './darkModeButton.scss';


const DarkModeButton = () => {

    const dispatch = useDispatch();
    const  themeDark  = useSelector( (state) => state.theme.dark );
    return (
        <div
            className='buttonDark__container'
            data-is-on={ themeDark }
            onClick={ () =>  dispatch( toggleTheme() ) }
        >
            <motion.div
                className='buttonDark__ball'
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                }}
            >
                <AnimatePresence>
                    <motion.div
                        className='icon__container'
                        key={themeDark}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                    >
                        {/* {themeDark ? 
                            <DarkModeIcon className='icon' ></DarkModeIcon>
                            :
                            <LightModeIcon className='icon'></LightModeIcon>
                        } */}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            
        </div>
    );
}

export default DarkModeButton;
