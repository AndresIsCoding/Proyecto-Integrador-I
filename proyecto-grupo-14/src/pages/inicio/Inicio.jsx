import { Canvas } from "@react-three/fiber";
import './Inicio.css';
import Header from "../../components/Header.jsx";
import Earth from "./Earth.jsx";
import { Text } from "@react-three/drei";

const Inicio = () => {
  const cameraSettings = { 
    fov: 60,
  };

  return (
    <div className="main-container">
      <Header /> 
      <Canvas camera={cameraSettings}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Earth position={[0, 0, 0]}/>
      </Canvas>
      <group className="title1">
        <h2 className="titleA">Menos del 1% es apta para el consumo</h2>
      </group>
      <group className="title2">
        <h2 className="titleB">Aunque cubra el 70%</h2>
      </group>
      <div>
        <p className="paragraph">
          Este es un párrafo que proporciona información adicional sobre el tema tratado en la página.
          Aquí hay más información en una nueva línea.
        </p>
      </div>
    </div>
    
  );
};

export default Inicio;
