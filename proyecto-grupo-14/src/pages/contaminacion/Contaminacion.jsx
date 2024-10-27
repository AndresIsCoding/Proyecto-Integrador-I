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
    <div className="contaminacion-background">
    <Header/>
    
    <Canvas camera={cameraSettings}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PlasticBottles/>   
      <OilBarrel/>
      <EggCarton/>
    </Canvas>
    </div>
    
  );
};

export default Contaminacion;