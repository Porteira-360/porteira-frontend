import React from 'react'

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import totvsLogo from '../../images/parceiros/totvs.png'
import ebarnLogo from '../../images/parceiros/ebarn.png'

import './styles.css'

const Partners = () => {
    return (
        <>
        <Nav />
        <Header /> 
        <div className="partner-page">
            <a href="http://totvs.com" target="_blank" rel="noopener noreferrer">
                <section className="partner-card">
                    <img src={totvsLogo} alt="Totvs"/>
                </section>
            </a>
            <a href="http://ebarn.com.br" target="_blank" rel="noopener noreferrer">
                <section className="partner-card">
                    <img src={ebarnLogo} alt="Totvs"/>
                </section>
            </a>
        </div>
        <Footer />
        </>
    )
}

export default Partners
