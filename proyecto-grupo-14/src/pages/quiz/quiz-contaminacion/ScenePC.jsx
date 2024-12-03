import { Physics } from "@react-three/rapier";
import { useState, useEffect } from "react";
import PlasticB from "../../contaminacion/models-cont/PlasticB";
import PlasticBottles from "../../contaminacion/models-cont/PlasticBottles";

const ScenePC = () => {
    const [reset, setReset] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setReset(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Physics gravity={[0, -9.8, 0]}>
      <PlasticB reset={reset} />
      <PlasticBottles/>
    </Physics>
  );
};

export default ScenePC