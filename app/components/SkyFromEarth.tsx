import { ThreeElements, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Circle, Sphere, Torus } from '@react-three/drei';
import { caculateMovingRadius } from '../util/utilies';

const sunMoveSpeed = 1;

function SkyFromEarth(props: ThreeElements['mesh']) {
  const skySphereRef = useRef<THREE.Mesh>(null!);
  const { height, rotateX, rotateY, rotateZ, movingRadius, offsetFromEquater } =
    useControls({
      height: { value: 0, min: -2, max: 2, step: 0.1 },
      rotateX: { value: 0, min: -2, max: 2, step: 0.1 }, // relates to latitude
      rotateY: { value: 0, min: -2, max: 2, step: 0.1 },
      rotateZ: { value: 0, min: -2, max: 2, step: 0.1 },
      movingRadius: { value: 10, min: 1, max: 20, step: 0.2 },
      offsetFromEquater: { value: 0, min: -1, max: 1, step: 0.1 }, // relates to time of a year
    });
  const [angle, setAngle] = useState(0);

  useFrame((state, delta) => {
    setAngle(angle + (delta * 1 * sunMoveSpeed) / movingRadius);
    // const z = radius * Math.sin(angle);
    skySphereRef.current.position.set(
      skySphereRef.current.position.x,
      height,
      skySphereRef.current.position.z
    );
    skySphereRef.current.rotation.set(rotateX, rotateY, rotateZ);
  });
  return (
    <>
      <mesh {...props} ref={skySphereRef}>
        <Sun
          movingRadius={movingRadius}
          offsetFromEquater={offsetFromEquater}
        />
        {/* Make thie Torus into a clock */}
        <Torus
          args={[
            caculateMovingRadius(movingRadius, offsetFromEquater),
            0.7,
            3,
            100,
          ]}
          position={[0, 0, offsetFromEquater]}
        >
          <meshStandardMaterial color={'hotpink'} wireframe />
        </Torus>
        <Sphere args={[movingRadius]}>
          <meshStandardMaterial
            transparent
            opacity={0.3}
            wireframe
            color={'hotpink'}
          />
        </Sphere>
      </mesh>
    </>
  );
}

export default SkyFromEarth;
