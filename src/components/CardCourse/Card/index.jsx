import React from 'react'

import './styles.css'

function Card(props) {
    return (
        <section className="card-course">
            <div className="card-image-container">
                <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="card-text-container">
                <p>
                    {props.text}
                </p>
            </div>
        </section>
    )
}

export default Card