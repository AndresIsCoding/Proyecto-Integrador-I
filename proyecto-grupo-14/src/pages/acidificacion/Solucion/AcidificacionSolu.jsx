import { Canvas } from "@react-three/fiber";
import './AcidificacionSolu.css';
import Lights from "./lights/Lights";
import Floor from "./elements/Floor";
import Header from "../../../components/Header";
import SensesText from "./elements/SensesText";
import Escena from "./elements/Escena";
import Factorio from "./elements/Factorio";

const AcidificacionSoluc = () => {
    const cameraSettings = {
        
      };

    return (
    <div className="acidificacion-background">
    <Header/>
    <Canvas shadows camera={cameraSettings}>
     <Lights/>
     <Escena/>
     <Factorio scale={0.07}  
               position={[-2,-1.5,0]} 
               rotation={[0,Math.PI/2,0]} />
     <Floor position={[-2,-1.5,0]} />
     <SensesText/>
    </Canvas>
    </div>
    );
};

export default AcidificacionSoluc;
