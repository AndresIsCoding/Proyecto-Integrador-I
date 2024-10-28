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

      <div className="main-title">
        <h1>Solo podemos <br/>beber menos del <br/>1%</h1>
      </div>

      <div className="title1">
        <h2>Aunque cubra el 70% del planeta...</h2>
      </div>

      <div className="small-text">
        <h2 className="title3">¿Porque saber esto es importante?</h2>
        <p className="paragraph">
          Se estima que para 2050 aproximadamente 6000 millones<br/> de personas
          sufrirán de escasez de agua debido<br/>al aumento de los niveles de contaminación.
        </p>
      </div>

      <div className="second-container">
        <group className="title2">
          <h2>Pero ese no es el único problema</h2>
        </group>
      </div>

    </div>
    
  );
};

export default Inicio;
