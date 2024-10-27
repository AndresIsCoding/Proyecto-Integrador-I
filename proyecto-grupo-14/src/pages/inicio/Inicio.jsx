// Inicio.jsx
import { Canvas } from "@react-three/fiber";
import './Inicio.css';
import Header from "../../components/Header.jsx";
import OilBarrel from "../contaminacion/OilBarrel.jsx";
import Earth from "./Earth.jsx";

const Inicio = () => {
  const cameraSettings = { 
    fov: 60,
  };

  return (
    <>
      <Header /> 

      <Canvas camera={cameraSettings}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Earth position={[0, 0, 0]}/>
      </Canvas>
    </>
  );
};

export default Inicio;
