import { RigidBody } from "@react-three/rapier";

const Floor = (props) => {
  return (
   <group {...props} dispose={null}>
    <RigidBody name="greenFloor" type="fixed" friction={2}> 
     <mesh name="floor" rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color="green" />
     </mesh>
    </RigidBody> 
   </group> 
  );
};

export default Floor;
