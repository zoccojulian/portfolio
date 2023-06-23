import React, { useState } from 'react';
import './contacto.scss';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import imagen from '../../../../assets/foto/foto_02_c.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const emailFormat = (email) => {
    console.log(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
}


const Contacto = () => {

    const { referencia } = useIsInView(secciones.CONTACTO, secciones.SKILLS);

    const [contacto, setContacto] = useState({name:'', email:'', message:''})
    const [errorInput, setErrorInput] = useState({name:{error:false, texto:''}, email:{error:false, texto:''}, message:{error:false, texto: ''}})


    const submit = (ev) => {
        ev.preventDefault()

        if(!errorInput.name.error && contacto.name.length >0 &&
            !errorInput.email.error && contacto.email.length >0 &&
            !errorInput.message.error && contacto.message.length >0
            ){
                console.log('mensaje enviado')
        
        }else {

            let nuevoEstado = contacto;

            if(contacto.name.length == 0){
                nuevoEstado = {...nuevoEstado, name:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}};
            }
            if(contacto.email.length == 0){
                nuevoEstado = {...nuevoEstado, email:{error:true, texto:'El campo "Email" no puede quedar vacío'}};
            }
            if(contacto.message.length == 0){
                nuevoEstado = {...nuevoEstado, message:{error:true, texto:'El campo "Mensaje" no puede quedar vacío'}};
            }

            setErrorInput({...nuevoEstado})

            
            // if(contacto.name.length == 0){
            //     setErrorInput({...errorInput, name:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}})
            // }
            // if(contacto.email.length == 0){
            //     setErrorInput({...errorInput, email:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}})
            // }
            // if(contacto.message.length == 0){
            //     setErrorInput({...errorInput, message:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}})
            // }

        }
    }

    const handleNameChange = (ev) => {

        switch (ev.target.id) {
            case 'name':
                let name = ev.target.value
                setContacto({...contacto, name})
                if(name.length == 0 && !errorInput.name.error){
                    setErrorInput({...errorInput, name:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}})
                } if (name.length > 0 && errorInput.name.error){
                    setErrorInput({...errorInput, name:{error:false, texto:''}})
                }
                break;
            case 'email':
                let email = ev.target.value
                setContacto({...contacto, email})
                if(email.length == 0){
                    setErrorInput({...errorInput, email:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}})
                }else if (email.length > 0 && !emailFormat(email)){
                    setErrorInput({...errorInput, email:{error:true, texto:'no es un formato de email válido (ejemplo@gmail.com)'}})
                    }else{
                        setErrorInput({...errorInput, email:{error:false, texto:''}})
                    }
                break;
            case 'message':
                let message = ev.target.value
                setContacto({...contacto, message})
                if(message.length == 0 && !errorInput.message.error){
                    setErrorInput({...errorInput, message:{error:true, texto:'El campo "Nombre" no puede quedar vacío'}})
                } if (message.length > 0 && errorInput.message.error){
                    setErrorInput({...errorInput, message:{error:false, texto:''}})
                }
                break;
        
            default:
                break;
        }

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
                            // id="outlined-password-input"
                            id='name'
                            label="Nombre"
                            type="text"
                            fullWidth
                            value={ contacto.name }
                            onChange={handleNameChange}
                            error={errorInput.name.error}
                            helperText={errorInput.name.error ? errorInput.name.texto : ''}
                        />
                        <TextField
                            // id="outlined-password-input"
                            id= 'email'
                            label="Email"
                            type="email"
                            fullWidth
                            value={ contacto.email }
                            onChange={handleNameChange}
                            error={errorInput.email.error}
                            helperText={errorInput.email.error ? errorInput.email.texto : ''}
                        />
                        <TextField
                            // id="outlined-multiline-flexible"
                            id= 'message'
                            label="Mensaje"
                            multiline
                            maxRows={4}
                            fullWidth
                            value={ contacto.message }
                            onChange={handleNameChange}
                            error={errorInput.message.error}
                            helperText={errorInput.message.error ? errorInput.message.texto : ''}
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
