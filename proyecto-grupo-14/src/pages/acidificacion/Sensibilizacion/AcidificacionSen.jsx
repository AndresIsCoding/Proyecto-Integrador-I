import { Canvas } from "@react-three/fiber";
import './AcidificacionSen.css';
import Lights from "./lights/Lights";
import Floor from "./elements/Floor";
import Header from "../../../components/Header";
import SensesText from "./elements/SensesText";
import Escena from "./elements/Escena";
import Isla from "./elements/Isla";
import Carbono from "./elements/Carbono";

const AcidificacionSen = () => {
    const cameraSettings = {
        
      };

    return (
    <div className="acidificacion-background">
    <Header/>
    <Canvas shadows camera={cameraSettings}>
     <Lights/>
     <Carbono/>
     <Carbono/>
     <Carbono/>
     <Escena/>
     <Isla scale={2} position={[-1.5,-1.5,1,0.2]}/>
     <Floor scale={2} position={[-2,-1.5,0]} />
     <SensesText/>
    </Canvas>
    </div>
    );
};

export default AcidificacionSen;
