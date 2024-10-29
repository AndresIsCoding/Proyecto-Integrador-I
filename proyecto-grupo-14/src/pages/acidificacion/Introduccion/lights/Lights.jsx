
const Lights = () => {
    return (
    <>
     <ambientLight intensity={50} color={"blue"} />
     <directionalLight position={[10, 10, 5]} intensity={4} color="lightblue" castShadow/>
    </>    
    )
};

export default Lights;