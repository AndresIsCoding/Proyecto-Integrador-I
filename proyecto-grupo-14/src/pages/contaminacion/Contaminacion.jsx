import { Canvas, useFrame } from "@react-three/fiber";
import './Contaminacion.css';
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import { ScrollRestoration } from "react-router-dom";
import Virus from "./models-cont/Virus";
import Trash from "./models-cont/Trash";
import TrianglePopup from "../../components/TrianglePopup";
import Underwater from "./videos-cont/Underwater";
import VirusBG from "./videos-cont/VirusBG";
import Divisor from "../../components/Divisor";
import TrashBG from "./videos-cont/TrashBG";
import Scene1 from "./models-cont/Scene1";
import PostProcessing from "./Postprocessing";

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
        <TrashBG/>
        {/*<PlasticBottles scale={8} position={[0,-1,0]}/>*/}
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
      <Divisor>Sensibilización</Divisor>


      <div className="second-containerC">
        <Slideshow/>
      </div>

      <Divisor>Efectos</Divisor>

      <div className="third-containerC" >
        <div className="fauna-text-container">
          <h1 className="title-fauna">En la fauna</h1>
          <p className="text-fauna">La pesca en aguas contaminadas, así como la utilización <br/> de  aguas residuales en la ganadería y la agricultura, pueden transmitir toxinas a los alimentos que perjudiquen nuestra <br/> salud a través de su ingesta.</p>
        </div>
        <Canvas
          className="canvas-efectos"
          camera={cameraSettings}
          style={{position: "absolute",width: '100%', height: '100%', left: 0, top: 0, bottom: 0,}}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <Trash scale={4} position={[-2.2,-2,0]}/>
          <Underwater/>
        </Canvas>
        <TrianglePopup message="Cuando el agua de ríos y lagos está sobrecargada de desechos orgánicos, escasea el oxígeno y plantas y animales pueden morir"/> 
      </div>

      <Divisor>Efectos</Divisor>

      <div className="fourth-container">
        <div className="enfermedades-text-container">
          <h1 className="title-enfermedades">Enfermedades</h1>
          <p className="text-enfermedades">La OMS calcula que unos 2.000 millones de personas beben agua potable contaminada por excrementos, exponiéndose a contraer enfermedades como el cólera, la hepatitis A y la disentería.</p>
        </div>
        
        <Canvas
          className="canvas-enfermedades"
          camera={cameraSettings}
          style={{ position: "absolute",width: '100%', height: '100%', left: 0, top: 0, bottom: 0,}}
        >
          <PostProcessing />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <VirusBG/>
          <Virus scale={1} position={[-1.5,0,0]}/>
        </Canvas>
      </div>
      
      <Divisor>Soluciones</Divisor>

      <div className="fifth-container">
        <Canvas
          className="canvas-soluciones"
          camera={cameraSettings}
          style={{position: "absolute",width: '100%', height: '100%', left: 0, top: 0, bottom: 0,}}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <Scene1/>
        </Canvas>
        <div className="plasticos-container">
          <h1 className="plasticos-title">Menos consumo de plasticos</h1>
          <p className="plasticos-text">Para reducir la contaminación hídrica es imprescindible disminuir la utilización del plástico de un solo uso y reciclar siempre este material en el contenedor adecuado. El plástico tarda en degradarse y permanece en el medio ambiente durante muchos años, descomponiéndose en forma de microplásticos que dañan el agua y toda la vida que ésta contiene.</p>
        </div>
        
      </div>
        
    
    </div>

    
  );
};

export default Contaminacion;