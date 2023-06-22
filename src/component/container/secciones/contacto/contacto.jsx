import React from 'react';
import './contacto.scss';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import imagen from '../../../../assets/foto/foto_02_c.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const Contacto = () => {

    const { referencia } = useIsInView(secciones.CONTACTO, secciones.SKILLS);


    const submit = (ev) => {
        ev.preventDefault()
        console.log('enviado')
    }

    return (
        <section className='contacto' ref={referencia}>
            <div className='contacto__container'>
                <div className='contacto__img'>
                    <img src={imagen} style={{ width: '100%' }}></img>
                </div>

                <div className='contacto__formulario'>
                    <Box
                        component='form'
                        className='contacto__formulario-box'
                        onSubmit={submit}
                    >
                        <TextField
                            id="outlined-password-input"
                            label="Nombre"
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            fullWidth
                            required
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Mensaje"
                            multiline
                            maxRows={4}
                            fullWidth
                            required
                        />
                        <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                            Enviar
                        </Button>
                    </Box>
                </div>
            </div>
        </section>
    );
}

export default Contacto;
