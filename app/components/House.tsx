import { ThreeElements } from '@react-three/fiber';
import { useRef, useState } from 'react';

const House = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={meshRef} scale={1} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default House;
