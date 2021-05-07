import React from 'react'

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import gif from '../../images/constructor-assets/em-construcao-gif.gif'

import './styles.css'

const ConstructorPage = () => {
    return (
        <>
        <Nav />
        <Header /> 
        <div className="constructor-container constructor-page">
        <section className="partner-card constructor-card">
                <img  src={gif} alt="Página em plantação"/>
                <p>Novidades aqui em breve!</p>
            </section>

        </div>
        <Footer />
        </>
    )
}

export default ConstructorPage
