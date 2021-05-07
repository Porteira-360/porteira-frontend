import React from 'react'

import markerImage from '../../images/marker-image.svg'
import waveImage from '../../images/wave.png'
import joseLuizImage from '../../images/especialistas/jose-luiz.png'
import drAgroImage from '../../images/especialistas/dr-agro.png'
import ricardoYogui from '../../images/especialistas/ricardo-yogui.png'

import Icon from 'react-fa'
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './styles.css'

function Sentence() {

    return (
        <>
        <Carousel 
            className="sentence-carousel-component"
            plugins={[
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button className="sentence-button"><Icon name="angle-double-left" /></button>,
                    arrowLeftDisabled:<button className="sentence-button"><Icon name="angle-left" /></button>,
                    arrowRight: <button style={{right: 0}} className="sentence-button"><Icon name="angle-double-right" /></button>,
                    arrowRightDisabled: <button style={{right: 0}} className="sentence-button"><Icon name="angle-right" /></button>,
                    addArrowClickHandler: true,
                  }
                }
              ]}
        >
            
            <div className="sentence-item-container">
                <img className="sentence-wave" src={waveImage} alt=""/>
                <h1>Frases 360º</h1>
                <div className="sentence-sub-container">
                    <img className="sentence-image" src={drAgroImage} alt=""/>
                    <div className="sentence-text-container">
                        <img className="sentence-text-marker-one" src={markerImage} alt=""/>
                        <p>
                        Sem a tecnologia não tem como reduzir custo e aumentar produção e nossa missão é simplificar as soluções para o nosso cliente, porque precisamos de um ecossistema cada vez mais maduro e colaborativo. 
                        </p>
                        <img className="sentence-text-marker-two" src={markerImage} alt=""/>
                    </div>
                </div>
                    <p className="sentence-author">Professor Marcos Fava Neves - Doutor Agro. Episódio 3 - Perspectivas para o Agronegócio em 2021.</p>
            </div>

            <div className="sentence-item-container">
                <img className="sentence-wave" src={waveImage} alt=""/>
                <h1>Frases 360º</h1>
                <div className="sentence-sub-container">
                    <img className="sentence-image" src={joseLuizImage} alt=""/>
                    <div className="sentence-text-container">
                        <img className="sentence-text-marker-one" src={markerImage} alt=""/>
                        <p>
                            O Brasil precisa de um planejamento estratégico de suas cadeias produtivas, que proporcionará uma visão de acesso e potencialidades de mercados internacionais e ao fazer isso, nós geramos um grande enriquecimento no mercado brasileiro. O agro é o caminho com ciência, tecnologia e informação processada e trabalhada.
                        </p>
                        <img className="sentence-text-marker-two" src={markerImage} alt=""/>
                    </div>
                </div>
                <p className="sentence-author">
                    José Luiz Tejon. Episódio 4 - Ou o Agro dobra de tamanho ou o PIB Brasileiro não cresce.
                </p>

            </div>

            <div className="sentence-item-container">
                <img className="sentence-wave" src={waveImage} alt=""/>
                <h1>Frases 360º</h1>
                <div className="sentence-sub-container">
                    <img className="sentence-image" src={ricardoYogui} alt=""/>
                    <div className="sentence-text-container">
                        <img className="sentence-text-marker-one" src={markerImage} alt=""/>
                        <p>
                        A transformação digital nos faz sair da zona de conforto e o caminho é focado na zona de aprendizado, um processo de educação continuada nesse mundo mais digital. A partir daí começa uma zona de crescimento abrindo horizontes e novas perspectivas.
                        </p>
                        <img className="sentence-text-marker-two" src={markerImage} alt=""/>
                    </div>
                </div>
                <p className="sentence-author">
                Professor Yogui. Episódio 2 - Agro Digital: O Negócio Do Futuro.
                </p>
            </div>
        </Carousel>
        </>
    )
}

export default Sentence