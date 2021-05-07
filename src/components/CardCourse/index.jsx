import React from "react"

import Card from "./Card"

import protheusEspecialization from '../../images/course-images/protheus-especializacao.png'
import protheusAToZ from '../../images/course-images/protheus-de-a-z.png'
import protheusOtimization from '../../images/course-images/protheus-otimizando.png'

import './styles.css'

function CardCourse() {
    const text = {
        "protheusEspecificacao": `Com as mudanças nas normas contábeis fez-se necessário a separação do saldo fiscal e
            do saldo societário. Mas através da utilização do sistema Protheus você pode organizar
            toda parte de lançamento de saldos. Ficou curioso? Walter Honorato, contador e consultor
            especialista TOTVS te explica! Acompanhe o vídeo e saiba mais!`,
        "protheuDeAZ": `Você sabia que pode realizar o aproveitamento de crédito de PIS e COFINS sobre ativo
            imobilizado? O nosso contador e consultor especialista TOTVS, Walter Honorato, te explica
            como! Assista o vídeo e fique por dentro!`,
        "protheusOtimizindo": `Você realiza o orçamento contábil de sua empresa? Então, esse vídeo é para você! Walter
            Honorato, contador e consultor especialista TOTVS, te explica como otimizar as contas
            contábeis através do sistema Protheus. Se eu fosse você, não perdia por nada esse vídeo!`
    }
    return (
        <main className="card-container">
            <Card
                video="https://www.youtube.com/embed/nYFOnfdA9FY"
                text={text.protheusEspecificacao}
            />
            <Card
                video="https://www.youtube.com/embed/nYFOnfdA9FY"
                text={text.protheuDeAZ}
            />
            <Card
                video="https://www.youtube.com/embed/nYFOnfdA9FY" 
                text={text.protheusOtimizindo}
            />
        </main>
    )
}

export default CardCourse