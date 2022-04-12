import React from 'react';
import  './CardComponent.css';

export default function CardGame({ card, manejarSeleccionCarta }) {
    const manejarAccion = () => {
        manejarSeleccionCarta(card);
    }

    return(
        <div className="carta">
            <div>
                <img className="frente" src={card.src} alt="Frente carta" />
                <img className="parteTrasera" src="./assets/back.jpg" onClick={manejarAccion} alt="Cover" />
            </div>
        </div>
    )
}