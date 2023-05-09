import React, { useRef, useEffect , useState} from 'react';
import { useInView, useScroll , useMotionValueEvent} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setSeccion } from '../../store/slices/seccionSlice';
import { secciones } from '../../js/secciones';

const useIsInView = ( seccion ) => {

    const referencia = useRef();
    const { scrollY } = useScroll();
    const [isUp, setIsUp] = useState({anterior:0, up:false});
    const dispatch = useDispatch();
    const inView = useInView(referencia, {amount:0.009});

    const enSeccion = useSelector ( ( state ) => state.secciones.seccion );
    const [seccionAnterior, setSeccionAnterior] = useState(null)

    useMotionValueEvent(scrollY, 'change', (ev) =>{

        let up = isUp.anterior > ev;

        let nuevoEstado = { anterior:ev, up:isUp.up};

        if( up != isUp.up ){
            nuevoEstado.up = up;
        }
        setIsUp(nuevoEstado)

        // console.log(ev)
        // console.log(isUp)
    } )

    useEffect(() => {


        if(inView && !isUp.up){
            setSeccionAnterior(enSeccion)
            console.log(enSeccion)
            dispatch(setSeccion(seccion))
        }else if(isUp.up){
            console.log(seccionAnterior)
            dispatch(setSeccion(seccionAnterior))
        }

        console.log(inView)
    }, [inView])

    return { referencia };
}

export default useIsInView;
