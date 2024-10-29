import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Coral = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Coral.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coral.geometry}
        material={materials.CoralMaterial}
      />
    </group>
  )
}

export default Coral;

useGLTF.preload('../models-3d/Coral.glb')