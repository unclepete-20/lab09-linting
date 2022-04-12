import React from 'react';
import './CardComponent.css';
import back from './assets/back.jpg';

export default function CardGame({ card, manejarSeleccionCarta, volteado, deshabilitar }) {
    const manejarAccion = () => {
        if(!disabled) {
            manejarSeleccionCarta(card);
        }
        
    }

    return(
        <div className="carta">
            <div className={volteado ? "volteado" : ""}>
                <img className="frente" src={card.src} alt="Frente carta" />
                <img className="parteTrasera" src={back} onClick={manejarAccion} alt="Cover" />
            </div>
        </div>
    )
}