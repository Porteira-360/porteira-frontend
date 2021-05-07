import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import logoImage from '../../images/logo-porteira.svg'
import alertIcon from '../../images/alert.svg'

import './styles.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function handleToCreateUser(e) {
        e.preventDefault()
        
        api('/users/login', {
            data: {
            "email": email,
            "password": password
        }})
            .then(response => {
                if (response.data.status === 200) {
                    localStorage.setItem('token', response.data.token)
                    history.push('/eventos-porteira')
                }
                if (response.data.status === 403) {
                    onOpenModal()
                }
                
            })
            .catch(error => onOpenModal())
    }

    return (
        <main className="login-container">
            <div className="login-subcontainer">
                <div className="login-welcome">
                    <Link to="/">
                        <img src={logoImage} alt="Porteira 360º"/>
                    </Link>
                    <h1>Login</h1>
                </div>
                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modal-error">
                        <div className="modal-text-error">
                            <img src={alertIcon} alt="ícone de erro"/>
                        </div>
                        <p>Houve um erro ao fazer login!</p>
                        <input onClick={onCloseModal} className="modal-again-error" type="submit" value="Tentar novamente"/>
                    </div>
                </Modal>
                <form className="field login-field" onSubmit={e => handleToCreateUser(e)}>
                    <div class="form__div">
                        <input  
                            required 
                            type="email" 
                            class="form__input" 
                            placeholder=" " 
                            onChange={e => setEmail(e.target.value)}     
                        />
                        <label for="" class="form__label">Email</label>
                    </div>

                    <div class="form__div">
                        <input 
                            required 
                            type="password" 
                            class="form__input" 
                            placeholder=" " 
                            onChange={e => setPassword(e.target.value)}     
                        />
                        <label for="" class="form__label">Senha</label>
                    </div>

                    <input type="submit" class="form__button login__buttom" value="Entrar" />
                </form>
                <p>Ainda não possui cadastro? <Link style={{color: '#6d7bfe'}} to="/cadastro">Clique aqui</Link></p>
            </div>
        </main>
    )
}

export default Login