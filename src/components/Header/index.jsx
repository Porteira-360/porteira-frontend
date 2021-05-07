import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'

import logoPorteira from '../../images/logo-porteira.svg'

import './styles.css'

function Header() {
    const history = useHistory()
    const [redirectEvent, setRedirectEvent] = useState('')

    function handleToToggleMenuClass(e) {
        const ul = document.querySelector('#ul-menu')
        const menu = document.querySelector('.mobile-menu')
        ul.classList.toggle('active')
        menu.classList.toggle('actived')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setRedirectEvent('/eventos-porteira')
        } else {
            setRedirectEvent('/porteira-em-um-minuto')
        }
    }, [])

    function handleOnPorteiraAberta(e) {
        e.preventDefault()

        const urlActual = window.location.pathname

        if (urlActual === '/') {
            const aboutSection = document.querySelector('.about-container')
            aboutSection.scrollIntoView({ behavior: 'smooth' })

        } else {
            history.push('/')
        }
    }

	return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <img className="logo-container" src={logoPorteira} alt="Logo Porteira 360"/>
                </Link>
                <div onClick={e => { 
                        handleToToggleMenuClass(e)
                    }} className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul id="ul-menu">
                    <a onClick={e => handleOnPorteiraAberta(e)} href="#">
                       <li>Porteira Aberta</li>
                    </a>
                       
                    <div className="line-break"></div>
                    <div class="dropdown">
                        <button type="button" class="dropbtn">
                            Eventos 
                            <i style={{marginLeft: '10px'}} class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <Link to={redirectEvent}>
                                <a>Porteira em 1´</a>
                            </Link>
                            <Link to="/vem-ai">
                                <a>Vem aí!</a>
                            </Link>
                        </div>
                    </div> 

                    <Link to='/cursos'>
                        <li>Cursos</li>
                    </Link>
                    <Link to='/conteudo360'>
                        <li>Conteúdo 360º</li>
                    </Link>
                    <Link to='/parceiros'>
                        <li>Parceiros</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header