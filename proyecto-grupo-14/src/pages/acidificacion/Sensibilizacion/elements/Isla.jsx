import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Isla = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/miniisland.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_1.geometry}
        material={materials['Material.007']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_2.geometry}
        material={materials['Material.008']}
      />
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_3.geometry}
        material={materials['Material.009']}
      />
    </group>
  )
}

export default Isla;

useGLTF.preload('../models-3d/miniisland.glb')