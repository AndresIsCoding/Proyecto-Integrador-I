import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Tierra = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Tierra.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_5.geometry}
        material={materials['Material.011']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_4.geometry}
        material={materials['Material.010']}
      />
    </group>
  )
}

export default Tierra;

useGLTF.preload('../models-3d/Tierra.glb')