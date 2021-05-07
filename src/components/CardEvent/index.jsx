import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

function CardEvent(props) {
    const history = useHistory()

    function handleToRedirectUser(e) {
        const token = localStorage.getItem('token')
        if (token?.length > 10) {
            history.push('/eventos-porteira')
        } else {
            history.push('/login')
        }
    }
    return (
        <section className="card-course">
            <div className="card-image-container">
                <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="card-text-container">
                <h3 className="card-event-title">{props.title}</h3>
                <p>
                    {props.text}
                </p>
                <p className="access-now">Assista agora mesmo o episódio completo, basta se cadastrar gratuitamente no nosso site PORTEIRA 360º.</p>
            </div>
            <div className="card-event-div">
                <button onClick={e => handleToRedirectUser(e)} className="card-event-button">Assistir completo</button>
            </div>
        </section>
    )
}

export default CardEvent