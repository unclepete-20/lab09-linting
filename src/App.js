import React from 'react';
import './App.css'
import CardComponent from './CardComponent';
import criaturaUno from './assets/creatureone.jpg';
import criaturaDos from './assets/creaturetwo.jpg';
import criaturaTres from './assets/creaturethree.jpg';
import criaturaCuatro from './assets/creaturefour.jpg';
import criaturaCinco from './assets/creaturefive.jpg';
import criaturaSeis from './assets/creaturefive.jpg';
import criaturaSiete from './assets/creaturesix.jpg';
import criaturaOcho from './assets/creatureseven.jpg';

function App() {

     const cartasCriaturas = [
         { "src": criaturaUno, matched: false },
         { "src": criaturaDos, matched: false },
         { "src": criaturaTres, matched: false},
         { "src": criaturaCuatro, matched: false},
         { "src": criaturaCinco, matched: false},
         { "src": criaturaSeis, matched: false},
         { "src": criaturaSiete, matched: false},
         { "src": criaturaOcho, matched: false}
     ];

    const [cartas, setCartas] = React.useState([])
    const [turnos, setTurnos] = React.useState(0)
    const [cartaSeleccionadaUno, setCartaSeleccionadaUno] = React.useState(null)
    const [cartaSeleccionadaDos, setCartaSeleccionadaDos] = React.useState(null)
    const [deshabilitar, setDeshabilitar] = React.useState(false)

    const shuffleCards = () => {
        const shuffledCards = [...cartasCriaturas, ...cartasCriaturas]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCartas(shuffledCards)
        setTurnos(0)
    }

    const manejarSeleccionCarta = (card) => {
        cartaSeleccionadaUno ? setCartaSeleccionadaDos(card) : setCartaSeleccionadaUno(card)
    }

    React.useEffect(() => {
        setDeshabilitar(true)
        if(cartaSeleccionadaUno && cartaSeleccionadaDos){
            if(cartaSeleccionadaUno.src === cartaSeleccionadaDos.src){
                setCartas(prevCartas => {
                    return prevCartas.map(card => {
                        if(card.src === cartaSeleccionadaUno.src){
                            return { ...card, matched: true }
                        }else{
                            return card
                        }
                        
                    })
                })
                reinicarTurno()
            }else{
                console.log('NO MATCH')
                setTimeout(() => reinicarTurno(), 1500)
            }
        }
    }, [cartaSeleccionadaUno, cartaSeleccionadaDos])

    const reinicarTurno = () => {
        setCartaSeleccionadaUno(null)
        setCartaSeleccionadaDos(null)
        setTurnos(prevTurnos => prevTurnos + 1)
        setDeshabilitar(false)
    }

    return (
        <div className="App">
            <h1>Forrest Creatures</h1>
            <button onClick={shuffleCards}>Nuevo juego</button>
            <div className="grid-cartas">
                {cartas.map(card => (
                    <CardComponent 
                    key={card.id} 
                    card={card} 
                    manejarSeleccionCarta={manejarSeleccionCarta} 
                    volteado={card === cartaSeleccionadaUno || card === cartaSeleccionadaDos || card.matched}
                    deshabilitar={deshabilitar} />
                ))}
            </div>
        </div>
    );
}

export default App