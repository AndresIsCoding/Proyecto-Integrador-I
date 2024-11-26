import { Canvas } from "@react-three/fiber";
import PlasticB from "./PlasticB";
import { Physics } from "@react-three/rapier";

const Scene1 = () => {
  const cameraSettings = {
    position: [0, 2, 5],
  };

  return (
    <Canvas shadows camera={cameraSettings}>
      <Physics
        debug
        gravity={[0, -1, 0]}
      >
        <PlasticB/>
      </Physics>
    </Canvas>
  );
};

export default Scene1;