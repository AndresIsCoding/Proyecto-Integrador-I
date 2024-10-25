import { Canvas, useFrame } from "@react-three/fiber";
import './World.css';
import Model from "../world/Earth";


const World = () => {
  const cameraSettings = { 
    fov: 60,

  };

  return (
    <Canvas camera={cameraSettings}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model position={[0, 0, 0]}/>   
    </Canvas>
    
  );
};

export default World;

