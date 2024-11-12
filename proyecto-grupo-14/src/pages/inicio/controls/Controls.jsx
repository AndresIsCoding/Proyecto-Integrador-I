import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';

function Controls({ cameraPosition }) {
  const { camera } = useThree();
  const targetPosition = useRef(cameraPosition); 

  useEffect(() => { targetPosition.current = cameraPosition;
  }, [cameraPosition]);

  useFrame(() => {
      camera.position.lerp(
      { x: targetPosition.current[0], y: targetPosition.current[1], z: targetPosition.current[2] },
      0.05 
    );
    camera.updateProjectionMatrix();
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={camera.position} fov={70} />
      <OrbitControls />
    </>
  );
}

export default Controls;
