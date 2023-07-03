import React, { useState } from 'react';
import './contacto.scss';
import useIsInView from '../../../hooks/useIsInView';
import { secciones } from '../../../../js/secciones';
import imagen from '../../../../assets/foto/foto_02_c.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../footer/footer';
import { motion, transform } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const emailFormat = (email) => {
    return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
}

const initialContacto = { name: '', email: '', message: '' };

const Contacto = () => {

    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                // Cambia el color del borde en estado normal
                                borderColor: 'rgba(57, 62, 65, 0.893)',
                            },
                            '&:hover fieldset': {
                                // Cambia el color del borde al pasar el ratón por encima
                                borderColor: '#393e41ff',
                            },
                            '&.Mui-focused fieldset': {
                                // Cambia el color del borde en estado de enfoque
                                borderColor: '#22aaa1ff',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            // Cambia el color del texto del label en estado normal
                            color: 'rgba(57, 62, 65, 0.893)',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            // Cambia el color del texto del label en estado de enfoque
                            color: '#22aaa1ff',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        // Cambia el color de fondo del botón en estado normal
                        backgroundColor: '#22aaa1ff',
                        // Cambia el color del texto del botón en estado normal
                        color: 'white',
                        '&:hover': {
                            // Cambia el color de fondo del botón al pasar el ratón por encima
                            backgroundColor: 'rgb(7, 129, 120)',
                        },
                        '&.Mui-focused': {
                            // Cambia el color de fondo del botón en estado de enfoque
                            backgroundColor: 'green',
                        },
                    },
                },
            },
        },
    });

    const { referencia } = useIsInView(secciones.CONTACTO, secciones.SKILLS);

    const [contacto, setContacto] = useState(initialContacto)
    const [errorInput, setErrorInput] = useState({ name: { error: false, texto: '' }, email: { error: false, texto: '' }, message: { error: false, texto: '' } })

    const [isEnviado, setIsEnviado] = useState(false)

    const submit = (ev) => {

        ev.preventDefault()

        if (!errorInput.name.error && contacto.name.length > 0 &&
            !errorInput.email.error && contacto.email.length > 0 &&
            !errorInput.message.error && contacto.message.length > 0
        ) {

            fetch("https://formsubmit.co/ajax/zoccojulian@gmail.com", {
                method: "POST",
                body: new FormData(ev.target)
            }).then((respuesta) => {
                setIsEnviado(true)
                setTimeout(() => { setContacto(initialContacto); setIsEnviado(false) }, 4000)
            }).catch((error) => alert(error));

        } else {

            let nuevoEstado = { ...errorInput };

            if (contacto.name.length == 0) {
                nuevoEstado = { ...nuevoEstado, name: { error: true, texto: 'El campo "Nombre" no puede quedar vacío' } };
            }
            if (contacto.email.length == 0) {
                nuevoEstado = { ...nuevoEstado, email: { error: true, texto: 'El campo "Email" no puede quedar vacío' } };
            }

            if (contacto.message.length == 0) {
                nuevoEstado = { ...nuevoEstado, message: { error: true, texto: 'El campo "Mensaje" no puede quedar vacío' } };
            }

            setErrorInput({ ...nuevoEstado })
        }
    }

    const handleNameChange = (ev) => {

        switch (ev.target.id) {
            case 'name':
                let name = ev.target.value
                setContacto({ ...contacto, name })
                if (name.length == 0 && !errorInput.name.error) {
                    setErrorInput({ ...errorInput, name: { error: true, texto: 'El campo "Nombre" no puede quedar vacío' } })
                } if (name.length > 0 && errorInput.name.error) {
                    setErrorInput({ ...errorInput, name: { error: false, texto: '' } })
                }
                break;
            case 'email':
                let email = ev.target.value
                setContacto({ ...contacto, email })
                if (email.length == 0) {
                    setErrorInput({ ...errorInput, email: { error: true, texto: 'El campo "Nombre" no puede quedar vacío' } })
                } else if (email.length > 0 && !emailFormat(email)) {
                    setErrorInput({ ...errorInput, email: { error: true, texto: 'no es un formato de email válido (ejemplo@gmail.com)' } })
                } else {
                    setErrorInput({ ...errorInput, email: { error: false, texto: '' } })
                }
                break;
            case 'message':
                let message = ev.target.value
                setContacto({ ...contacto, message })
                if (message.length == 0 && !errorInput.message.error) {
                    setErrorInput({ ...errorInput, message: { error: true, texto: 'El campo "Nombre" no puede quedar vacío' } })
                } if (message.length > 0 && errorInput.message.error) {
                    setErrorInput({ ...errorInput, message: { error: false, texto: '' } })
                }
                break;

            default:
                break;
        }

    }

    return (
        <section className='contacto' ref={referencia}>
            <div className='contacto__container'>
                <div className='contacto__img' style={{ backgroundImage: `url(${imagen})` }}>
                </div>
                <div className='contacto__formulario'>
                    <h4 className='contacto__formulario-titulo'>Dejame un mensaje ...</h4>
                    <Box
                        component='form'
                        className='contacto__formulario-box'
                        onSubmit={submit}
                    >
                        <ThemeProvider theme={theme}>
                            <TextField
                                // id="outlined-password-input"
                                id='name'
                                label="Nombre"
                                type="text"
                                fullWidth
                                value={contacto.name}
                                onChange={handleNameChange}
                                error={errorInput.name.error}
                                helperText={errorInput.name.error ? errorInput.name.texto : ''}
                                size='small'
                                name='name'
                            />

                            <TextField
                                // id="outlined-password-input"
                                id='email'
                                label="Email"
                                type="text"
                                fullWidth
                                value={contacto.email}
                                onChange={handleNameChange}
                                error={errorInput.email.error}
                                helperText={errorInput.email.error ? errorInput.email.texto : ''}
                                size='small'
                                name='email'
                                sx={{ backgroundColor: '#0000' }}
                            />
                            <TextField
                                // id="outlined-multiline-flexible"
                                id='message'
                                label="Mensaje"
                                multiline
                                maxRows={2}
                                fullWidth
                                value={contacto.message}
                                onChange={handleNameChange}
                                error={errorInput.message.error}
                                helperText={errorInput.message.error ? errorInput.message.texto : ''}
                                size='small'
                                name='message'
                            />

                            <Button type='submit' variant="contained" endIcon={<SendIcon />} >
                                Enviar
                            </Button>
                        </ThemeProvider>
                    </Box>
                    <motion.div
                        className='contacto__enviado'
                        variants={{
                            send: {
                                display: 'flex'
                            },
                            noSend: {
                                display: 'none'
                            }
                        }}
                        initial={{ display: 'none' }}
                        animate={isEnviado ? 'send' : 'noSend'}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className='contacto__enviado-fondo'
                            variants={{
                                send: {
                                    opacity: 1
                                },
                                noSend: {
                                    opacity: 0
                                }
                            }}
                            initial={{ opacity: 0 }}
                            animate={isEnviado ? 'send' : 'noSend'}
                            transition={{ duration: 1 }}
                        ></motion.div>
                        <motion.div
                            className='contacto__enviado-icon'
                            variants={{
                                send: {
                                    transform: 'translateX(300%)',
                                    opacity: [0, 1, 0]
                                },
                                noSend: {
                                    transform: 'translateX(-300%)',
                                    opacity: 0
                                }
                            }}
                            initial={{ transform: 'translateX(-300%)', opacity: 0 }}
                            animate={isEnviado ? 'send' : 'noSend'}
                            transition={{ duration: 1.5 }}
                        >
                            <SendIcon
                                className='contacto__enviado-sendIcon'
                            ></SendIcon>
                        </motion.div>
                        <motion.h4
                            className='contacto__enviado-texto'
                            variants={{
                                send: {
                                    opacity: 1
                                },
                                noSend: {
                                    opacity: 0
                                }
                            }}
                            initial={{ opacity: 0 }}
                            animate={isEnviado ? 'send' : 'noSend'}
                            transition={{ duration: 1, delay: 1 }}
                        >Muchas Gracias!</motion.h4>
                    </motion.div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Contacto;
