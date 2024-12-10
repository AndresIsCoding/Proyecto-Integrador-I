import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useVideoTexture } from "@react-three/drei";
import { EffectComposer, Pixelation } from "@react-three/postprocessing"; // Importar pixelation
import Green from "./Green";
import Skull from "./skull";
import Header from "../../components/Header";
import './Escasez.css';
import { ScrollRestoration } from "react-router-dom";
import { Physics } from "@react-three/rapier";
import { RigidBody } from "@react-three/rapier";

const VideoPlane = ({ url, position, rotation }) => {
  const texture = useVideoTexture('/videos/sequia.mp4'); // Cargar textura del video
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[5, 3]} /> {/* Ajustar tamaño del video */}
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};


const Escasez = () => {
  const [showCard, setShowCard] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [pixelate, setPixelate] = useState(false);

  const handleModelClick = () => {
    setShowCard(true);
    setShowSolutions(false); // Asegura que la primera vista sea la tarjeta inicial
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
      <ScrollRestoration />
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
        style={{ background: "#a0c4ff" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} castShadow />
        <Text
          position={[0, 3, 0]}
          fontSize={1}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Cada Gota Cuenta
        </Text>
        <VideoPlane url="/videos/escasez.mp4" position={[0, 1.5, -5]} rotation={[0, 0, 0]} />
        <Green onClick={handleModelClick} />
        <OrbitControls autoRotate={autoRotate} autoRotateSpeed={1} enableZoom={false} />
        {/* Posprocesado con Pixelation */}
        {pixelate && (
          <EffectComposer>
            <Pixelation granularity={3} />
          </EffectComposer>
        )}
      </Canvas>

      <button
        onClick={() => setPixelate((prev) => !prev)}
        className="button-pixelate"
      >
        {pixelate ? "Desactivar Pixelation" : "Activar Pixelation"}
      </button>


      <div className="instruction-card">
        <p>💡 Puedes hacer clic en el modelo para más información.</p>
        <p>🔄 Presiona espacio para activar/desactivar la rotación automática.</p>
      </div>

      {showCard && (
        <div className="info-card">
          <div className="info-content">
            <div className="text-content">
              {showSolutions ? (
                <>
                  <h3>🔧 Posibles soluciones para la escasez de agua</h3>
                  <ul>
                    <li>Fomentar el uso eficiente del agua en la agricultura y la industria.</li>
                    <li>Incentivar la recolección y el uso de agua de lluvia.</li>
                    <li>Promover el reciclaje de agua en procesos industriales.</li>
                    <li>Educar a la población sobre el ahorro de agua en el hogar.</li>
                    <li>Invertir en tecnologías para la desalinización de agua.</li>
                    <li>Restaurar ecosistemas que favorezcan la retención de agua, como humedales.</li>
                  </ul>
                </>
              ) : (
                <>
                  <h3>💧 Cada gota cuenta 💧</h3>
                  <p>
                    Con el cambio climático, la contaminación y el uso irresponsable, estamos llevando al límite nuestras reservas de agua dulce.
                    Para 2050, se estima que 6 mil millones de personas enfrentarán problemas de escasez de agua. Esto significa menos agua para beber, para cultivar alimentos y para sostener la vida de nuestros ecosistemas.
                    Actúa hoy para proteger el agua. Cada pequeño cambio en nuestros hábitos hace una diferencia: cierra el grifo, reduce el desperdicio, y ayuda a crear conciencia.
                  </p>
                </>
              )}
            </div>
            <div className="canvas-container">
              <Canvas
                shadows
                camera={{ position: [15, 15, 15], fov: 35 }}
                style={{ width: "300px", height: "300px" }}
              >
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Physics>
                  <Skull />
                  <RigidBody type="fixed">
                    <mesh receiveShadow position={[0, -1, 0]}>
                      <boxGeometry args={[10, 1, 10]} />
                      <meshStandardMaterial color="lightgray" />
                    </mesh>
                  </RigidBody>
                </Physics>
                <OrbitControls enableZoom={true} />
              </Canvas>
            </div>
            {!showSolutions ? (
              <button onClick={() => setShowSolutions(true)}>Continuar</button>
            ) : (
              <button onClick={() => setShowCard(false)}>Cerrar</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Escasez;
