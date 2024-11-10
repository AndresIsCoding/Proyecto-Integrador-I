import { Canvas, useFrame } from "@react-three/fiber";
import './Contaminacion.css';
import PlasticBottles from "./PlasticBottles";
import OilBarrel from "./OilBarrel";
import EggCarton from "./EggCarton";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import { ScrollRestoration } from "react-router-dom";

const Contaminacion = () => {
  const cameraSettings = { 
    fov: 60,
  };

  return (
    <div className="backgroundC">
      <ScrollRestoration/>
      <div className="main-containerC">
        <Header/>
        <Canvas
         className="canvas-cont"
         camera={cameraSettings}
         >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={5} />
        <PlasticBottles scale={6} position={[0,-1,0]}/>
      </Canvas>
        
        <div className="intro-cont">
          <h1>¿Qué es la contaminación del agua?</h1>
          <p>
            La contaminación del agua ocurre cuando sustancias nocivas
            contaminan un arroyo, un río, un lago, un océano, un acuífero u otra masa de agua,
            degradando la calidad del agua  y haciéndola tóxica para los seres humanos o el medio ambiente.
          </p>
        </div>
      </div>

      <div className="second-containerC">
        <h1>Tipos de contaminación</h1>
        <Slideshow/>
      </div>
      
      <div className="third-containerC" >
        <h1 className="title-efectos">Efectos de la contaminación</h1>
      </div>

    </div>

    
  );
};

export default Contaminacion;