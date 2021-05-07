import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function CardEventFull(props) {

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
            </div>
            <div className="card-event-div">
                <a href={props.video} target="_blank" rel="noopener noreferrer">
                    <button className="card-event-button">Assistir no YouTube</button>
                </a>
            </div>
        </section>
    )
}

export default CardEventFull