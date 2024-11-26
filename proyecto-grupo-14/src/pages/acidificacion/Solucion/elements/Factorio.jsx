
import React, { useCallback, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Factorio = (props) => {
  const group = useRef()
  const impFactRef = useRef()
  const { nodes, materials, animations } = useGLTF('../models-3d/factorio.glb')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    actions["Stretch&Squash"].play();
    return () => actions["Stretch&Squash"].stop();
  }, [actions])

  const handleFact = useCallback(() => {
    actions["Stretch&Squash"].stop();
    impFactRef.current.applyImpulse({ x: -8, y: 10, z: -5 }, true);
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} onClick={handleFact}>
      <group name="Scene">
       <RigidBody name="rbBall" type="dynamic"
                  colliders="cuboid" ref={impFactRef}> 
        <mesh
          name="Fabrica"
          castShadow
          receiveShadow
          geometry={nodes.Fabrica.geometry}
          material={materials['Otro.001']}
        />
       </RigidBody> 
      </group>
    </group>
  )
}

export default Factorio;

useGLTF.preload('../models-3d/factorio.glb')
