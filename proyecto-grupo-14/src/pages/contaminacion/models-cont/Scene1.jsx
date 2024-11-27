import PlasticB from "./PlasticB";
import { Physics } from "@react-three/rapier";
import { useState, useEffect } from "react";
import PlasticBottles from "./PlasticBottles";

const Scene1 = () => {
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setReset(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Physics gravity={[0, -9.8, 0]} debug>
      <PlasticB reset={reset} />
      <PlasticBottles/>
    </Physics>
  );
};

export default Scene1;
