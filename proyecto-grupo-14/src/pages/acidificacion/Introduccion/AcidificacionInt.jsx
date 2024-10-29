import { Canvas } from "@react-three/fiber";
import './AcidificacionInt.css';
import Lights from "./lights/Lights";
import Coral from "./elements/Coral";
import Floor from "./elements/Floor";
import Header from "../../../components/Header";

const AcidificacionInt = () => {
    const cameraSettings = {
        
      };

    return (
    <div className="acidificacion-background">
    <Header/>

    <Canvas shadows camera={cameraSettings}>
     <Lights/>
     <Coral scale={0.02} position={[-2,-1.5,0]}/>
     <Floor scale={2} position={[-2,-1.5,0]} />
    </Canvas>
    </div>
    );
};

export default AcidificacionInt;
