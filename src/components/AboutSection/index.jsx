import React from 'react'

import aboutImage from '../../images/about-section-image.webp'

import './styles.css'

function AboutSection() {
    return (
        <section className="about-container">
            <div className="about-image-container">
                <img src={aboutImage} alt="porteira 360"/>
            </div>
            <div className="about-text-container">
                <h1>PORTEIRA ABERTA</h1>
                <p>
                    Abrimos a nossa porteira para você entrar e já se sentir à vontade!
                    O Porteira 360° nasce atendendo o segmento do agronegócio antes, dentro e depois da porteira. 
                    <br />
                    <br />
                    Aqui é possível encontrar conteúdos como dados diários sobre economia, agronegócio, entrevistas, notícias, webséries, eventos do setor, podcast, cursos de capacitação, infográficos, materiais ricos e de grande impacto para atualizar o segmento sobre pesquisa, tecnologia, tendências, projeções, análises, inteligência de mercado, entre outros. 
                    <br />
                    <br />
                    Sabemos que a semente do futuro do agro germina no solo do conhecimento e é regada  pela inovação.  Somos informação, tecnologia e evolução.
                    Muito prazer, somos Porteira 360°!
                </p>
            </div>
        </section>
    )
}

export default AboutSection