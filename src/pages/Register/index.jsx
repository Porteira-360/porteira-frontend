import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImage from '../../images/logo-porteira.svg'
import alertIcon from '../../images/alert.svg'

import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import './styles.css'
import Loading from '../../components/Loading'

function Register() {
    const history = useHistory()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    function handleToCreateUser(e) {
        e.preventDefault()
        setLoading(true)

        api('/users', {
            data: {
            "name": name,
            "email": email,
            "phone": String(phone),
            "password": password
        }})
            .then(response => {
                setLoading(false)
                if (response.data.status === 201) {
                    history.push('/login')
                }
                if (response.data.status === 403 || 401 || 500) {
                    onOpenModal()
                    console.log(response)
                }
            })
            .catch(error => {
                onOpenModal()
            })
    }

    return (
        <main className="login-container">
            <div className="login-subcontainer">
                <div className="login-welcome">
                    <Link to="/">
                        <img src={logoImage} alt="Porteira 360º"/>
                    </Link>
                    <h1>Cadastro</h1>
                </div>

                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modal-error">
                        <div className="modal-text-error">
                            <img src={alertIcon} alt="ícone de erro"/>
                        </div>
                        <p>Houve um erro ao fazer cadastro</p>
                        <input onClick={onCloseModal} className="modal-again-error" type="submit" value="Tentar novamente"/>
                    </div>
                </Modal>
                {loading && (
                    <Loading />
                )}
                <form onSubmit={e => handleToCreateUser(e)} className="field login-field">
                    <div class="form__div">
                        <input
                            required 
                            type="text" 
                            class="form__input" 
                            placeholder=" " 
                            onChange={e => setName(e.target.value)} 
                        />
                        <label for="" class="form__label">Nome completo</label>
                    </div>

                    <div class="form__div">
                        <input 
                            required 
                            type="email" 
                            class="form__input"
                            placeholder=" "
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <label for="" class="form__label">Seu melhor email</label>
                    </div>

                    <div class="form__div">
                        <input 
                            required 
                            type="number" 
                            class="form__input"
                            placeholder=" "
                            onChange={e => setPhone(e.target.value)} 
                        />
                        <label for="" class="form__label">Telefone</label>
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

                    <input type="submit" class="form__button login__buttom register__buttom" value="Me cadastrar" />
                </form>
                <p>Já possui uma conta? <Link style={{color: '#6d7bfe'}} to="/login">Clique aqui</Link></p>
            </div>
        </main>
    )
}

export default Register