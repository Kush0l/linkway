import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Loader = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.03;
      meshRef.current.rotation.x += 0.015;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
      <meshStandardMaterial color="#999999" roughness={0.6} metalness={0.2} />
    </mesh>
  );
};

export default Loader;
