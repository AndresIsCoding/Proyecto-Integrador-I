import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Barril = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/Barril.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oil_Barell_GEO.geometry}
        material={materials.oil_barell}
      />
    </group>
  )
}

export default Barril;

useGLTF.preload('../models-3d/Barril.glb')