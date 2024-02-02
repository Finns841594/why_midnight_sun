import { Sphere } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';

function Sun(props: ThreeElements['mesh']) {
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
      <Sphere args={[0.5]}>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </Sphere>
    </mesh>
  );
}

export default Sun;
