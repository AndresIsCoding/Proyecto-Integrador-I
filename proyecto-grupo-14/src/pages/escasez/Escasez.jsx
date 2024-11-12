import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Green from "./Green";
import Header from "../../components/Header";
import './Escasez.css'; // Usa esta si el archivo se llama "Escasez.css" con E mayúscula.
import { ScrollRestoration } from "react-router-dom";

const Escasez = () => {
  const [showCard, setShowCard] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);

  const handleModelClick = () => {
    setShowCard(!showCard);
  };

  const cameraSettings = {
    position: [10, 10, 10],
    fov: 35,
  };

  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      setAutoRotate((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="escasez-background">
      <ScrollRestoration/>
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
      <Canvas
        shadows
        camera={cameraSettings}
        style={{ background: "#a0c4ff" }} // Color de fondo plano
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} castShadow />
        
        {/* Modelo 3D */}
        <Green onClick={handleModelClick} />

        {/* Controles de órbita con autoRotate controlado */}
        <OrbitControls autoRotate={autoRotate} autoRotateSpeed={1} enableZoom={false} />
      </Canvas>

      {/* Tarjeta de instrucciones */}
      <div className="instruction-card">
        <p>💡 Puedes hacer clic en el modelo para más información.</p>
        <p>🔄 Presiona espacio para activar/desactivar la rotación automática.</p>
      </div>

      {/* Tarjeta de información al hacer clic en el modelo */}
      {showCard && (
        <div className="info-card">
          <div className="info-content">
            <div className="text-content">
              <h3>💧 Cada gota cuenta 💧</h3>
              <p>
                Con el cambio climático, la contaminación y el uso irresponsable, estamos llevando al límite nuestras reservas de agua dulce.
                Para 2050, se estima que 6 mil millones de personas enfrentarán problemas de escasez de agua. Esto significa menos agua para beber, para cultivar alimentos y para sostener la vida de nuestros ecosistemas.
                Actúa hoy para proteger el agua. Cada pequeño cambio en nuestros hábitos hace una diferencia: cierra el grifo, reduce el desperdicio, y ayuda a crear conciencia.
              </p>
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
