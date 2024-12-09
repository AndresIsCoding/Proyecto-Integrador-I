import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Botella = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Botella.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.bottle}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle022.geometry}
          material={materials.krishka}
        />
      </mesh>
    </group>
  )
}

export default Botella;

useGLTF.preload('../models-3d/Botella.glb')