import { Link } from "react-router-dom";
import Tierra from "./Elements/Tierra";
import Flor from "./Elements/Flor";
import Casa from "./Elements/Casa";
import Arbol from "./Elements/Arbol";
import OilBarrel from "../contaminacion/models-cont/OilBarrel";
import Lights from "../acidificacion/Sensibilizacion/lights/Lights";
import Header from "../../components/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import Barril from "./Elements/Barril";
import Botella from "./Elements/Botella";
import Factorio from "../acidificacion/Solucion/elements/Factorio";
import Fabrica from "./Elements/Fabrica";
import Car from "./Elements/Car";
import { useState, useEffect } from "react";
import './Quiz.css'
import { Html } from "@react-three/drei";

import { db } from "../../../firebase.config"; // Asegúrate de importar Firebase
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth(); // Obtener la instancia de autenticación de Firebase






const Quiz = () => {
  const cameraSettings = {
    position: [0, 10, 30],
    fov: 35,
  };

  const [visibleModels, setVisibleModels] = useState(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
  const [Puntos, setPuntos] = useState(0);
  const [gameStatus, setGameStatus] = useState('start');
  const harmfulObjects = new Set([1, 2, 3, 4, 5, 6]);

  const maxPoints = 7;
  const minPoints = -6;

  // Guardar puntuación en Firebase
  const saveScore = async (score) => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "scores", user.uid); // Referencia al documento del usuario
      try {
        const docSnap = await getDoc(userRef);
        const currentMaxScore = docSnap.exists() ? docSnap.data().maxScore : 0;

        if (score > currentMaxScore) {
          await setDoc(userRef, { maxScore: score });
          console.log("Puntuación guardada correctamente.");
        } else {
          console.log("La puntuación no supera el puntaje máximo actual.");
        }
      } catch (error) {
        console.error("Error al guardar la puntuación:", error);
      }
    } else {
      console.log("El usuario no está autenticado.");
    }
  };

  const handleClick = (id) => {
    if (gameStatus !== 'inProgress') return;

    setVisibleModels((prev) => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });


    if (id === 7 ||
      id === 8 ||
      id === 9 ||
      id === 10 ||
      id === 11 ||
      id === 12 ||
      id === 13) {
      setPuntos(Puntos + 1);
    } else {
      setPuntos(Puntos - 1);;
    };
  };

  useEffect(() => {
    const remainingObjects = [...visibleModels];
    const harmfulRemaining = remainingObjects.every(id => harmfulObjects.has(id));

    if (harmfulRemaining) {
      setGameStatus('finished');
    } else if (Puntos >= maxPoints || Puntos <= minPoints) {
      setGameStatus('finished');
    }
  }, [visibleModels, Puntos]);

  // Llama a la función cuando el juego termine
  useEffect(() => {
    if (gameStatus === "finished") {
      saveScore(Puntos); // Guardar la puntuación cuando el juego termine
    }
  }, [gameStatus]);
  
  useEffect(() => {
    if (gameStatus === "finished") {
      console.log("Juego terminado. Estado actual:", { gameStatus, Puntos });
    }
  }, [gameStatus]);

  useEffect(() => {
    if (Puntos >= maxPoints) {
      setGameStatus('finished');
    } else if (Puntos <= minPoints) {
      setGameStatus('finished');
    }
  }, [Puntos]);

  useEffect(() => {
    if (visibleModels.size === 0) {
      setGameStatus('finished');
    }
  }, [visibleModels]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setGameStatus('finished');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const startGame = () => {
    setGameStatus('inProgress')
  }

  return (
    <div className="acidificacion-background">
      <Header />
      <Canvas camera={cameraSettings}>
        <Lights />
        <OrbitControls />
        {visibleModels.has(1) && <Flor onClick={() => handleClick(1)} scale={0.4} position={[0, 1.7, -3]} />}
        {visibleModels.has(2) && <Flor onClick={() => handleClick(2)} scale={0.4} position={[-1, 1.6, 4]} />}
        {visibleModels.has(3) && <Casa onClick={() => handleClick(3)} scale={0.8} position={[2, 1.9, 2]} />}
        {visibleModels.has(4) && <Casa onClick={() => handleClick(4)} scale={0.8} position={[-1, 1.7, 0]} />}
        {visibleModels.has(5) && <Arbol onClick={() => handleClick(5)} scale={0.8} position={[-4.2, 1.5, 3]} />}
        {visibleModels.has(6) && <Arbol onClick={() => handleClick(6)} scale={0.8} position={[3, 1.7, -2]} />}
        {visibleModels.has(7) && <Barril onClick={() => handleClick(7)} scale={0.4} position={[1.5, 1.8, 0]} />}
        {visibleModels.has(8) && <Botella onClick={() => handleClick(8)} scale={0.4} position={[4, 1.8, 0]} />}
        {visibleModels.has(9) && <Botella onClick={() => handleClick(9)} scale={0.4} position={[-4, 1.8, -2]} />}
        {visibleModels.has(10) && <Fabrica onClick={() => handleClick(10)} scale={0.06} position={[-5, 1.7, 0]} />}
        {visibleModels.has(11) && <Fabrica onClick={() => handleClick(11)} scale={0.06} position={[5, 1.7, 1.5]} />}
        {visibleModels.has(12) && <Car onClick={() => handleClick(12)} scale={0.6} position={[6, 1.45, -2]} />}
        {visibleModels.has(13) && <Car onClick={() => handleClick(13)} scale={0.6} position={[-4, 1.8, 2]} />}
        <Tierra scale={12} position={[0, 0, -8]} />
        <Text
          position={[0, 5, -5]}
          fontSize={1}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Puntos: {Puntos}
        </Text>
        <Text
          position={[0, -7, -5]}
          fontSize={1}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Elimina los objetos que sean potencialmente dañinos para los cuerpos de agua
        </Text>
        {gameStatus === 'finished' && (
          <>
            <Text
              position={[0, 3, -5]}
              fontSize={2}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              ¡Juego Terminado!
            </Text>

          </>
        )}
      </Canvas>

      <div className="calificaciones-button">
        <Link
          to="/calificaciones"
          state={{ maxScore: Puntos }} // Pasar la puntuación máxima
        >
          <button>Ver Calificaciones</button>
        </Link>
      </div>
      {gameStatus === 'start' && (
        <div className="intro-quiz">
          <h1>¿Estas preparado para <br /> poner tus conocimientos en práctica?</h1>
          <button onClick={startGame}>Iniciar Juego</button>
        </div>
      )}
    </div>

  );
};

export default Quiz;