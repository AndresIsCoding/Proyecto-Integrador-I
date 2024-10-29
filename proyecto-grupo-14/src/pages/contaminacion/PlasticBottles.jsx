import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const PlasticBottles = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/PlasticBottles.glb');
  const ref = useRef();
  const floatSpeed = 0.5; 
  const floatAmplitude = 1.5; 
  const moveSpeedX = 1.5; 
  const moveAmplitudeX = 1.5; 

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
   
    ref.current.position.y = Math.sin(t * floatSpeed) * floatAmplitude; 
  
    ref.current.position.x = Math.sin(t * moveSpeedX) * moveAmplitudeX; 
  });
  return (
    <group {...props}  ref={ref} dispose={null}>
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plastic_Bottle_03_GEO.geometry}
        material={materials.Plastic_Bottles}
        position={[0.59, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plastic_Bottle_02_GEO.geometry}
        material={materials.Plastic_Bottles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plastic_Bottle_01_GEO.geometry}
        material={materials.Plastic_Bottles}
        position={[-0.367, 0, 0]}
      />
    </group>
  )
}

export default PlasticBottles;

useGLTF.preload('../models-3d/PlasticBottles.glb')
