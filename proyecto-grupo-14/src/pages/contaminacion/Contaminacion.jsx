import { Canvas, useFrame } from "@react-three/fiber";
import './Contaminacion.css';
import PlasticBottles from "./PlasticBottles";
import OilBarrel from "./OilBarrel";
import EggCarton from "./EggCarton";



const Contaminacion = () => {
  const cameraSettings = { 
    fov: 60,
  };

  return (
    <Canvas camera={cameraSettings}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PlasticBottles/>   
      <OilBarrel/>
      <EggCarton/>
    </Canvas>
    
  );
};

export default Contaminacion;