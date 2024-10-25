import { Canvas } from "@react-three/fiber";
import './Inicio.css';
import Earth from "./Earth.jsx";
import OilBarrel from "../contaminacion/OilBarrel.jsx";
import Header from "../../components/Header.jsx";
import { Html } from "@react-three/drei";
const Inicio = () => {
  const cameraSettings = { 
    fov: 60,
  };

  return (
      <Canvas camera={cameraSettings}>
        <Header /> 
        <ambientLight intensity={0.5} />
      </Canvas>
  );
};

export default Inicio;
