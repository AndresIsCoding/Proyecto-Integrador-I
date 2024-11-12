import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const MapPointer = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/MapPointer.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.Red} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Yellow}
        />
      </group>
    </group>
  )
}

export default MapPointer;

useGLTF.preload('/Map Pointer.glb')
