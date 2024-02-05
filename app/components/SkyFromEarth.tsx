import { ThreeElements, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Circle, Sphere } from '@react-three/drei';

const sunMoveSpeed = 1;
const radius = 2;

function SkyFromEarth(props: ThreeElements['mesh']) {
  const sunRef = useRef<THREE.Mesh>(null!);
  const skySphereRef = useRef<THREE.Mesh>(null!);
  const { height, rotateX, rotateY, rotateZ } = useControls({
    height: { value: 0, min: -2, max: 2, step: 0.1 }, // relates to time of a year
    rotateX: { value: 0, min: -2, max: 2, step: 0.1 }, // relates to latitude
    rotateY: { value: 0, min: -2, max: 2, step: 0.1 },
    rotateZ: { value: 0, min: -2, max: 2, step: 0.1 },
  });
  const [angle, setAngle] = useState(0);

  useFrame((state, delta) => {
    setAngle(angle + (delta * 1 * sunMoveSpeed) / radius);
    // const z = radius * Math.sin(angle);
    sunRef.current.position.set(
      sunRef.current.position.x,
      height,
      sunRef.current.position.z
    );
    sunRef.current.rotation.set(rotateX, rotateY, rotateZ);
  });
  return (
    <>
      <mesh {...props} ref={sunRef}>
        <Sun />
        <Circle args={[radius]}>
          <meshStandardMaterial color={'hotpink'} />
        </Circle>
        <Sphere args={[radius]}>
          <meshStandardMaterial transparent opacity={0.3} color={'hotpink'} />
        </Sphere>
      </mesh>
    </>
  );
}

export default SkyFromEarth;
