import { Canvas } from "@react-three/fiber";
import './World.css';

const World = () => {
  return (
    <Canvas camera={{ position: [2, 0, 5], }} >
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 10, 10]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'cyan'} />
      </mesh>
    </Canvas>
  );
};

export default World;
