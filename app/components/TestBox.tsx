'use client';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const TestBox = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);

  const radius = 1;

  useFrame((state, delta) => {
    setAngle(angle + delta);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    meshRef.current.position.set(x, y, meshRef.current.position.z);
  });
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default TestBox;
