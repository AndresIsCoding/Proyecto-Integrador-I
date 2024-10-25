import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const OilBarrel = (props) => {
  const { nodes, materials } = useGLTF('../models-3d/OilBarrel.glb')
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

export default OilBarrel

useGLTF.preload('../models-3d/OilBarrel.glb')
