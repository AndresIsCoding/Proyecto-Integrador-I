import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const OilBarrel = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/OilBarrel.glb')
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
    <group {...props} ref={ref} dispose={null} >
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oil_Barell_GEO.geometry}
        material={materials.oil_barell}
        pointerEvents="none"
      />
    </group>
  )
}

export default OilBarrel

useGLTF.preload('../models-3d/OilBarrel.glb')
