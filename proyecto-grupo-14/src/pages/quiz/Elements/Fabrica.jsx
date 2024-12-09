import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Fabrica = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('../models-3d/factorio.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Fabrica"
          castShadow
          receiveShadow
          geometry={nodes.Fabrica.geometry}
          material={materials['Otro.001']}
        />
      </group>
    </group>
  )
}

export default Fabrica;

useGLTF.preload('../models-3d/factorio.glb')