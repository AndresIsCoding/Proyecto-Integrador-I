import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const OilBarrel = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/OilBarrel.glb')
  const barrelRef = useRef();

  useFrame(() => {
    if (barrelRef.current) {
      barrelRef.current.rotation.x += 0.01; 
      barrelRef.current.rotation.y += 0.01; 
    }
  });
  return (
    <group ref={barrelRef} {...props} dispose={null}>
      <OrbitControls
        autoRotate={true}
        enableZoom={false}
        enablePan={false}
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
