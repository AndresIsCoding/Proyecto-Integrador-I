/* eslint-disable react/no-unknown-property */
import { FlyControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import './World.css';

import Cube from "./Cube";



const World = () => {
  

  
  return (
    <Canvas camera={{ position: [2, 0, 5] }}>
      <FlyControls //The controls to move on the 3D world
        movementSpeed={10}
        rollSpeed={4}
        dragToLook={true}
      /> 
      {/* Recreate the lights */}
      <ambientLight intensity={1.5} /> 
      <directionalLight
        position={[0, 10, 10]}
        intensity={1}
        color="white"
        castShadow
      />
      <Cube />
    </Canvas>
    
  );
};

export default World;

