import { Canvas } from "@react-three/fiber";
import Green from "./Green";
import Header from "../../components/Header";
import { useState } from "react";
import './Escasez.css';

const Escasez = () => {
  const [showCard, setShowCard] = useState(false);

  const handleModelClick = () => {
    setShowCard(!showCard);
  };

  const cameraSettings = {
    position: [10, 10, 10],
    fov: 35,
  };

  return (
    <div className="escasez-background">
      <Header />
      <div className="escasez-intro">
        <h2>Escasez de Agua</h2>
        <p>
          La escasez de agua es uno de los problemas más críticos que enfrenta el mundo en la actualidad.
          A medida que la población mundial crece y el cambio climático altera los patrones de precipitación,
          el acceso al agua dulce se vuelve cada vez más limitado. En muchas regiones, la demanda de agua supera
          la capacidad de los recursos disponibles, lo que impacta gravemente en la agricultura, la industria y
          la vida diaria de millones de personas.
        </p>
      </div>
      <Canvas shadows camera={cameraSettings}>
        <ambientLight intensity={0.7} />

        {/* Primera luz direccional con sombras habilitadas */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />

        {/* Segunda luz direccional, ubicada en un ángulo diferente */}
        <directionalLight
          position={[-10, 10, -5]}
          intensity={0.5}
          castShadow
        />

        {/* Pasa el evento de clic al modelo */}
        <Green onClick={handleModelClick} />
      </Canvas>

      {/* Tarjeta HTML que se muestra cuando showCard es true */}
      {showCard && (
        <div className="info-card">
          <div className="info-content">
            <div className="text-content">
              <h3>Escasez de agua</h3>
              <p>La escasez de agua se refiere a la falta de suficientes recursos hídricos para satisfacer las demandas de consumo de agua en una región. El problema de la escasez de agua afecta a alrededor de dos mil ochocientos millones de personas en todos los continentes del mundo durante al menos un mes cada año.</p>
            </div>
            <img src="https://fepropaz.com/wp-content/uploads/2024/05/1-2.jpg" alt="Imagen de escasez de agua" />
          </div>
          <button onClick={() => setShowCard(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Escasez;
