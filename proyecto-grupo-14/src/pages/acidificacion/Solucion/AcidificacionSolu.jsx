import { Canvas } from "@react-three/fiber";
import './AcidificacionSolu.css';
import Lights from "./lights/Lights";
import Floor from "./elements/Floor";
import Header from "../../../components/Header";
import SolucText from "./elements/SolucText";
import Escena from "./elements/Escena";
import Factorio from "./elements/Factorio";
import { Physics } from "@react-three/rapier";

const AcidificacionSoluc = () => {
    const cameraSettings = {
        
      };

    return (
    <div className="acidificacion-background">
    <Header/>
    <Canvas shadows camera={cameraSettings}>
     <Lights/>
     <Escena/>
     <Physics>
      <Factorio scale={0.07}  
               position={[-2,-1.5,2]} 
               rotation={[0,Math.PI/2,0]} />
      <Factorio scale={0.07}  
               position={[-1,-1.5,0]} 
               rotation={[0,1.5*Math.PI/2,0]} />
      <Factorio scale={0.07}  
               position={[-5,-1.5,-2]} 
               rotation={[0,1.5*Math.PI/2,0]} />                  
      <Floor position={[-2,-1.5,0]} />
     </Physics> 
     <SolucText/>
    </Canvas>
    </div>
    );
};

export default AcidificacionSoluc;
