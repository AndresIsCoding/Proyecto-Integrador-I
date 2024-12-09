import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Arbol = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Arbol.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.Wood_mtl} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.Leaf} />
    </group>
  )
}

export default Arbol;

useGLTF.preload('../models-3d/Arbol.glb')