import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Sphere } from '@react-three/drei';
import { caculateMovingRadius } from '../util/utilies';
import SkyClock from './SkyClock';

const sunMoveSpeed = 1;
const defaultMovingRadius = 10;
const tropicRadian = (23.5 * Math.PI) / 180;

function SkyFromEarth(props: ThreeElements['mesh']) {
  const skySphereRef = useRef<THREE.Mesh>(null!);
  const { rotateX, rotateY, rotateZ, movingRadius, offsetFromEquater } =
    useControls({
      rotateX: {
        value: 0,
        min: -Math.PI / 2,
        max: Math.PI / 2,
        step: Math.PI / 90,
      }, // relates to latitude
      rotateY: { value: 0, min: -2, max: 2, step: 0.1 },
      rotateZ: { value: 0, min: -2, max: 2, step: 0.1 },
      movingRadius: {
        value: defaultMovingRadius,
        min: 1,
        max: 2 * defaultMovingRadius,
        step: 0.2,
      },
      offsetFromEquater: {
        value: 0,
        min: -10 * Math.sin(tropicRadian),
        max: 10 * Math.sin(tropicRadian),
        step: 0.01,
      }, // relates to time of a year
    });

  useFrame((state, delta) => {
    skySphereRef.current.rotation.set(rotateX, rotateY, rotateZ);
  });

  const [caculatedMovingRadus, setCaculatedMovingRadus] = useState(() =>
    caculateMovingRadius(movingRadius, offsetFromEquater)
  );

  useEffect(() => {
    setCaculatedMovingRadus(
      caculateMovingRadius(movingRadius, offsetFromEquater)
    );
  }, [movingRadius, offsetFromEquater]);

  return (
    <>
      <mesh {...props} ref={skySphereRef}>
        <Sun
          movingRadius={caculatedMovingRadus}
          position={[0, 0, offsetFromEquater]}
        />
        <SkyClock
          radius={caculatedMovingRadus}
          position={[0, 0, offsetFromEquater]}
        />
        <Sphere args={[movingRadius]}>
          <meshStandardMaterial wireframe color={'hotpink'} />
        </Sphere>
      </mesh>
    </>
  );
}

export default SkyFromEarth;
