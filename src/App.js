import React from 'react';
import './App.css'
import criaturaUno from './assets/creatureone.jpg';
import criaturaDos from './assets/creaturetwo.jpg';
import criaturaTres from './assets/creaturethree.jpg';
import criaturaCuatro from './assets/creaturefour.jpg';
import criaturaCinco from './assets/creaturefive.jpg';
import criaturaSeis from './assets/creaturefive.jpg';
import criaturaSiete from './assets/creaturesix.jpg';
import criaturaOcho from './assets/creatureseven.jpg';
import backCover from './assets/backCover.png';

function App() {

    
     const cartasCriaturas = [
         { "src": criaturaUno },
         { "src": criaturaDos },
         { "src": criaturaTres },
         { "src": criaturaCuatro },
         { "src": criaturaCinco },
         { "src": criaturaSeis },
         { "src": criaturaSiete },
         { "src": criaturaOcho }
     ];

    const [cartas, setCartas] = React.useState([])
    const [turnos, setTurnos] = React.useState(0)

    function shuffleCards () {
        const shuffledCards = [...cartasCriaturas, ...cartasCriaturas]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCartas(shuffledCards)
        setTurnos(0)
        console.log("Hola")
    }

    console.log(cartas, turnos)

    return (
        <div className="App">
            <h1>Forrest Creatures</h1>
            <button onClick={shuffleCards}>Nuevo juego</button>
            <div className="grid-cartas">
                {cartas.map(card => (
                    <div className="carta" key={card.id}>
                        <div>
                            <img className="frente" src={card.src} alt="Frente carta" />
                            <img className="parteTrasera" src={backCover} alt="Cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App