
import React, { useCallback, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Factorio = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../models-3d/factorio.glb')
  const { actions } = useAnimations(animations, group)

  console.log(actions);
  
  useEffect(() => {
    actions["Stretch&Squash"].play();
    return () => actions["Stretch&Squash"].stop();
  }, [actions])

  const handleFact = useCallback(() => {
    actions["Stretch&Squash"].stop();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} onClick={handleFact}>
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

export default Factorio;

useGLTF.preload('../models-3d/factorio.glb')
