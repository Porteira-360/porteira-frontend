import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import EventImage from '../../images/event-two.svg'
import CardEvent from '../../components/CardEvent'

import './styles.css'

function Event() {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token?.length > 10) {
            
        } else {
            history.push('/porteira-em-um-minuto')
        }
    }, [])

  return (
    <>
    <Nav />
    <Header />
    <div className="event-description-container">
        <div className="event-text-container">
            <h1 className="event-title">Eventos</h1>
            <p className="event-text">
                Esse projeto nasceu, a princípio, com a premissa de realizar eventos com conteúdos de
                interesse para o agronegócio. Essa websérie é dividida em episódios com um mesmo
                objetivo: trazer discussões contemporâneas e antecipar as projeções futuras do mercado do
                agro. <br /><br />
                A websérie sempre traz a participação de grandes nomes do mercado brasileiro, como
                aconteceu no episódio 3, com Doutor Agro - professor Marcos Fava Neves - abordando as
                perspectivas para o agro em 2021 e o episódio 4, com Luiz Tejon, instigando a reflexão: “ou
                o agronegócio dobra de tamanho ou o PIB brasileiro não cresce”. <br /><br />
                O Porteira 360° veio com a missão de aproximar o discurso de pequenos, médios e grandes
                produtores, empresas e fornecedores de toda a cadeia do agro.
            </p>
        </div>
        <div className="event-image-container">
            <img src={EventImage} alt="Imagem ilustrativa" />
        </div>
    </div>
    <div className="event-porteira-container">
        <div className="event-porteira-title-container">
            <h1 className="event-title align-porteira-title">Porteira em 1´</h1>
        </div>
        <main className="card-container">
            <CardEvent 
                title="EPISÓDIO 1 - PLANEJAR E ORÇAR É SÓ COMEÇAR"
                video="https://www.youtube.com/embed/o_9502ZVWDw"
                text="O evento aborda tópicos importantes para a efetivação do Planejamento e Orçamento Agrícolas sob os aspectos estratégicos, operacionais e financeiros, desde o planejamento até a comercialização. "
            />
            <CardEvent 
                title="EPISÓDIO 2 - AGRO DIGITAL: O NEGÓCIO DO FUTURO"
                video="https://www.youtube.com/embed/fA4MuZjcZfg"
                text='“Como ser digital frente aos desafios da conectividade?”
                Com esta abordagem sobre tecnologia e inovação dentro das organizações espera-se a geração de insights diversos e, de certa forma, um  impacto no agronegócio brasileiro.'
            />
            <CardEvent 
                title="EPISÓDIO 3 - PERSPECTIVAS PARA O AGRONEGÓCIO EM 2021 COM DOUTOR AGRO"
                video="https://www.youtube.com/embed/AViW4tgnxEI"
                text='Professor Marcos Favas Neves - Doutor Agro - aborda sobre as “Perspectivas para o Agronegócio 2021” enfatizando o planejamento como um desafio constante e o avanço da tecnologia aliada ao campo impulsionando o crescimento das empresas no mercado. '
            />
            <CardEvent 
                title="EPISÓDIO 4 - OU O  AGRO DOBRA DE TAMANHO OU O PIB BRASILEIRO NÃO CRESCE (TEJON)"
                video="https://www.youtube.com/embed/bG2VFX-hGHk"
                text='José Luiz Tejon, grande nome do agronegócio brasileiro e uma das maiores autoridades nas áreas de gestão de vendas, marketing, liderança e motivação provoca:
                "ou dobramos o agro de tamanho ou o PIB brasileiro não cresce." '
            />
            <CardEvent 
                title="EPISÓDIO 5 - MULHERES QUE BRILHAM NO AGRO"
                video="https://www.youtube.com/embed/jT2kE5xmpsE"
                text='As irmãs Adriane Steinmetz e Cristiane Steinmetz, produtoras, empreendedoras e influenciadoras, mostram como as mulheres brilham no agro e instigam a reflexão:
                “antes de sermos mulheres do agro, somos mulheres”.'
            />
        </main>
    </div>
    <Footer />
    </>
  )
}

export default Event;
