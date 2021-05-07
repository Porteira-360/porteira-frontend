import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import instagramIcon from '../../images/instagram-icon.svg'
import facebookIcon from '../../images/facebook-icon.svg'
import youtubeIcon from '../../images/youtube-icon.svg'
import enterIcon from '../../images/vip-enter-icon.svg'

import axios from "axios"

import './styles.css'

function Nav() {
    const [dolarValue, setDolarValue] = useState('')

    useEffect(() => {
        axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL")
            .then(result => {
                const dolar = result.data.USDBRL.bid.substring(0, 4)
                setDolarValue(dolar)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <nav className="nav-container">
            <div className="div-information">
                <p className="p-information">
                    R$ {dolarValue} Dólar
                </p>
                {/*<p className="p-information">
                    Goiânia-GO 28°C 19°C
                </p>
                <img className="cloud-icon" src={cloudImage} alt="icone nuvem"/>*/}

            </div>
                <div className="social-media-container">
                    <a href="https://www.instagram.com/porteira360/" target="_blank">
                        <img src={instagramIcon} alt="instagram porteira"/>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <img src={facebookIcon} alt="facebook porteira"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCmZMhm4FOo_gtyvREZKuUPw" target="_blank">
                        <img src={youtubeIcon} alt="youtube porteira"/>
                    </a>
                    
                    <Link to="/login">
                        <button className="button-login">Camarote VIP <img src={enterIcon} alt="icone entrar"/></button>
                    </Link>
                </div>
        </nav>
    )
}

export default Nav