import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Casa = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Casa.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.Wall} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.Roof} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials['Material #13']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_3.geometry} material={materials.Whte} />
    </group>
  )
}

export default Casa;

useGLTF.preload('../models-3d/Casa.glb')