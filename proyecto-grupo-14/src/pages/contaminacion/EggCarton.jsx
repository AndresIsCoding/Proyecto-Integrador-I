import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const EggCarton = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/EggCarton.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Egg_Carton_GEO.geometry}
        material={materials.Egg_Carton}
      />
    </group>
  )
}

export default EggCarton;

useGLTF.preload('../models-3d/EggCarton.glb')
