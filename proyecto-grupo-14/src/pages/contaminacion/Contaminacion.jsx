import { Canvas, useFrame } from "@react-three/fiber";
import './Contaminacion.css';
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import { ScrollRestoration } from "react-router-dom";
import PlasticBottles from "./models-cont/PlasticBottles";
import Virus from "./models-cont/Virus";
import Trash from "./models-cont/Trash";
import TrianglePopup from "../../components/TrianglePopup";
import Underwater from "./videos-cont/Underwater";
import VirusBG from "./videos-cont/VirusBG";



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
        <Canvas
          className="canvas-efectos"
          camera={cameraSettings}
          style={{ width: '700px', height: '500px', left: 100}}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <Trash scale={4} position={[0,-2,0]}/>
          <Underwater/>
        </Canvas>
        <h1 className="title-fauna">En la fauna</h1>
        <p className="text-fauna">La pesca en aguas contaminadas, así como la utilización de aguas residuales en la ganadería y la agricultura, pueden transmitir toxinas a los alimentos que perjudiquen nuestra salud a través de su ingesta.</p>
          <TrianglePopup message="Cuando el agua de ríos y lagos está sobrecargada de desechos orgánicos, escasea el oxígeno y plantas y animales pueden morir 
          "/>
      </div>

      <div className="fourth-container">
        <h1 className="title-enfermedades">Enfermedades</h1>
        <p className="text-enfermedades">La OMS calcula que unos 2.000 millones de personas beben agua potable contaminada por excrementos, exponiéndose a contraer enfermedades como el cólera, la hepatitis A y la disentería.</p>
        <Canvas
          className="canvas-enfermedades"
          camera={cameraSettings}
          style={{ width: '700px', height: '500px', left: 100}}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <VirusBG/>
          <Virus scale={1} position={[0,0,0]}/>
        </Canvas>
      </div>
    
    </div>

    
  );
};

export default Contaminacion;