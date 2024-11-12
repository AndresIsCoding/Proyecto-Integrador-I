import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const PlasticBottles = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/PlasticBottles.glb');

  return (
    <group {...props} dispose={null}>
      <OrbitControls
        autoRotate={true}
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
        rotation={[0, Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plastic_Bottle_02_GEO.geometry}
        material={materials.Plastic_Bottles}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plastic_Bottle_01_GEO.geometry}
        material={materials.Plastic_Bottles}
        position={[-0.367, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  )
}

export default PlasticBottles;

useGLTF.preload('../models-3d/PlasticBottles.glb')
