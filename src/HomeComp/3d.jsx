import React from "react";

const AbstractModel = () => {
  return (
    <group >
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color="#e84644" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[1.5, 0.5, -0.5]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#302350" />
      </mesh>
    </group>
  );
};

export default AbstractModel;



