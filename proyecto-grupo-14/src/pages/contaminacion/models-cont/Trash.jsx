import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Trash  = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Trash.glb')
  return (
    <group {...props} dispose={null}>
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trash_Pile_03_GEO.geometry}
        material={materials.Pile_of_Trash}
        position={[4.582, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trash_Pile_02_GEO.geometry}
        material={materials.Pile_of_Trash}
        position={[2.568, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trahs_Pile_01_GEO.geometry}
        material={materials.Pile_of_Trash}
      />
    </group>
  )
}

export default Trash;

useGLTF.preload('../models-3d/Trash.glb')
