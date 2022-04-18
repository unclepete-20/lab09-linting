import React from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";
import criaturaUno from "./assets/creatureone.jpg";
import criaturaDos from "./assets/creaturetwo.jpg";
import criaturaTres from "./assets/creaturethree.jpg";
import criaturaCuatro from "./assets/creaturefour.jpg";
import criaturaCinco from "./assets/creaturefive.jpg";
import criaturaSeis from "./assets/creaturesix.jpg";
import criaturaSiete from "./assets/creatureseven.jpg";
import criaturaOcho from "./assets/creatureeight.jpg";

function App() {
  const cartasCriaturas = [
    { src: criaturaUno, matched: false },
    { src: criaturaDos, matched: false },
    { src: criaturaTres, matched: false },
    { src: criaturaCuatro, matched: false },
    { src: criaturaCinco, matched: false },
    { src: criaturaSeis, matched: false },
    { src: criaturaSiete, matched: false },
    { src: criaturaOcho, matched: false },
  ];

  const [cartas, setCartas] = React.useState([]);
  const [turnos, setTurnos] = React.useState(0);
  const [cartaSeleccionadaUno, setCartaSeleccionadaUno] = React.useState(null);
  const [cartaSeleccionadaDos, setCartaSeleccionadaDos] = React.useState(null);
  const [deshabilitar, setDeshabilitar] = React.useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cartasCriaturas, ...cartasCriaturas]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCartaSeleccionadaUno(null);
    setCartaSeleccionadaDos(null);
    setCartas(shuffledCards);
    setTurnos(0);
  };

  React.useEffect(() => {
    shuffleCards();
  }, []);

  const manejarSeleccionCarta = (card) => {
    cartaSeleccionadaUno
      ? setCartaSeleccionadaDos(card)
      : setCartaSeleccionadaUno(card);
  };

  const reinicarTurno = () => {
    setCartaSeleccionadaUno(null);
    setCartaSeleccionadaDos(null);
    setTurnos((prevTurnos) => prevTurnos + 1);
    setDeshabilitar(false);
  };

  React.useEffect(() => {
    if (cartaSeleccionadaUno && cartaSeleccionadaDos) {
      setDeshabilitar(true);
      if (cartaSeleccionadaUno.src === cartaSeleccionadaDos.src) {
        setCartas((prevCartas) => {
          return prevCartas.map((card) => {
            if (card.src === cartaSeleccionadaUno.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        reinicarTurno();
      } else {
        setTimeout(() => reinicarTurno(), 1500);
      }
    }
  }, [cartaSeleccionadaUno, cartaSeleccionadaDos]);

  return (
    <div className="App">
      <h1>Forrest Creatures</h1>
      <button type="button" onClick={shuffleCards}>
        Nuevo juego
      </button>
      <div className="grid-cartas">
        {cartas.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            manejarSeleccionCarta={manejarSeleccionCarta}
            volteado={
              card === cartaSeleccionadaUno ||
              card === cartaSeleccionadaDos ||
              card.matched
            }
            deshabilitar={deshabilitar}
          />
        ))}
      </div>
      <p className="turnos">Turnos: {turnos}</p>
      <p className="turnos">
        Cartas encontradas: {cartas.filter((card) => card.matched).length}
      </p>
      <p className="Nombre">Pedro Pablo Arriola Jimenez (20188)</p>
    </div>
  );
}

export default App;
