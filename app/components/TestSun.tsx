import { ThreeElements, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import Sun from './Sun';

const sunMoveSpeed = 1;
const radius = 2;

function TestSun(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [angle, setAngle] = useState(45);

  useFrame((state, delta) => {
    setAngle(angle + (delta * 1 * sunMoveSpeed) / radius);
    const z = radius * Math.cos(angle);

    meshRef.current.position.set(
      meshRef.current.position.x,
      meshRef.current.position.y,
      z
    );
  });
  return (
    <mesh {...props} ref={meshRef}>
      <Sun />
    </mesh>
  );
}

export default TestSun;
