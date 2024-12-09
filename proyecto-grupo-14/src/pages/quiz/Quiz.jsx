import { Link } from "react-router-dom";
import Tierra from "./Elements/Tierra";
import Flor from "./Elements/Flor";
import Casa from "./Elements/Casa";
import Arbol from "./Elements/Arbol";
import OilBarrel from "../contaminacion/models-cont/OilBarrel";
import Lights from "../acidificacion/Sensibilizacion/lights/Lights";
import Header from "../../components/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Barril from "./Elements/Barril";
import Botella from "./Elements/Botella";
import Factorio from "../acidificacion/Solucion/elements/Factorio";
import Fabrica from "./Elements/Fabrica";
import Car from "./Elements/Car";
import { useState } from "react";

const Quiz = () => {
  const cameraSettings = {
    position: [10, 10, 10],
    fov: 35,
  };

  const [visibleModels, setVisibleModels] = useState(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

  const [Puntos, setPuntos] = useState(10);

  const handleClick = (id) => {
    setVisibleModels ((prev) => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });

    
      if (id === 7|| 
          id === 8|| 
          id === 9|| 
          id === 10|| 
          id === 11|| 
          id === 12|| 
          id === 13) {
        setPuntos(Puntos + 1);
      } else {
        setPuntos(Puntos - 1);;
      };
  };

  console.log("Puntos:", Puntos);
  
  return (
  <div className="acidificacion-background">
  <Header/>
  <Canvas camera={cameraSettings}>
   <Lights />
   <OrbitControls/>
   {visibleModels.has(1) && <Flor onClick={() => handleClick(1)} scale={0.4} position={[0,1.7,-3]}/>}
   {visibleModels.has(2) && <Flor onClick={() => handleClick(2)} scale={0.4} position={[-1,1.6,4]}/>}
   {visibleModels.has(3) && <Casa onClick={() => handleClick(3)} scale={0.8} position={[2,1.9,2]}/>}
   {visibleModels.has(4) && <Casa onClick={() => handleClick(4)} scale={0.8} position={[-1,1.7,0]}/>}
   {visibleModels.has(5) && <Arbol onClick={() => handleClick(5)} scale={0.8} position={[-4.2,1.5,3]}/>}
   {visibleModels.has(6) && <Arbol onClick={() => handleClick(6)} scale={0.8} position={[3,1.7,-2]}/>}
   {visibleModels.has(7) && <Barril onClick={() => handleClick(7)} scale={0.4} position={[1.5,1.8,0]}/>}
   {visibleModels.has(8) && <Botella onClick={() => handleClick(8)} scale={0.4} position={[4,1.8,0]}/>}
   {visibleModels.has(9) && <Botella onClick={() => handleClick(9)} scale={0.4} position={[-4,1.8,-2]}/>}
   {visibleModels.has(10) && <Fabrica onClick={() => handleClick(10)} scale={0.06} position={[-5,1.7,0]}/>}
   {visibleModels.has(11) && <Fabrica onClick={() => handleClick(11)} scale={0.06} position={[5,1.7,1.5]}/>}
   {visibleModels.has(12) && <Car onClick={() => handleClick(12)} scale={0.6} position={[6,1.45,-2]}/>}
   {visibleModels.has(13) && <Car onClick={() => handleClick(13)}scale={0.6} position={[-4,1.8,2]}/>}
   <Tierra scale={12} position={[0,0,-8]} />
  </Canvas>
  </div>
  );
};

export default Quiz;