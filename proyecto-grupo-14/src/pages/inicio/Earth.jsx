import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Earth = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Earth.glb');
  console.log(materials)
  console.log(nodes)
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Default OBJ']}
      />
    </group>
  )
}

export default Earth;

useGLTF.preload('../models-3d/Earth.glb')
