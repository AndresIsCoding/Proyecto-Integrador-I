import { Canvas, useFrame } from "@react-three/fiber";
import './Contaminacion.css';
import PlasticBottles from "./PlasticBottles";
import OilBarrel from "./OilBarrel";
import EggCarton from "./EggCarton";
import Header from "../../components/Header";

const Contaminacion = () => {
  const cameraSettings = { 
    fov: 60,
  };

  return (
    <div className="main-containerC">
      <Header/>
      <Canvas 
        className= "canvas-cont" 
        camera={cameraSettings}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={10} />  
        <OilBarrel scale={3} position={[-3,-1,-5]}/>
      </Canvas>

      <div className="intro-cont">
        <h1>¿Qué es la <br/>contaminación del agua?</h1>
        <p>
          La contaminación del agua ocurre cuando sustancias nocivas<br/>
          contaminan un arroyo, un río, un lago, un océano, un acuífero u otra masa de agua,<br/>degradando la calidad del agua  y haciéndola tóxica para los seres humanos o el medio ambiente.
        </p>
      </div>
      <div className="cont-second-container">
        <div className="tipos-cont">
          <h1>Tipos de contaminación</h1>
        </div>
      </div>
     
    </div>
    
  );
};

export default Contaminacion;