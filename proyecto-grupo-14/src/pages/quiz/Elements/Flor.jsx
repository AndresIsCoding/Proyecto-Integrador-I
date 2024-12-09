import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Flor = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Flor.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_1.geometry}
        material={materials.texture3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_2.geometry}
        material={materials['texture 2']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_3.geometry}
        material={materials.leef}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_4.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_5.geometry}
        material={materials['dark green']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_6.geometry}
        material={materials.white}
      />
    </group>
  )
}

export default Flor;

useGLTF.preload('../models-3d/Flor.glb')