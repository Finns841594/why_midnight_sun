import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Sphere } from '@react-three/drei';
import {
  caculateMovingRadiusByOffset,
  fromDegreeToRadian,
} from '../util/utilies';
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
        min: 0,
        max: 90,
        step: 1,
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
        min: -defaultMovingRadius * Math.sin(tropicRadian),
        max: defaultMovingRadius * Math.sin(tropicRadian),
        step: 0.01,
      }, // relates to time of a year
    });

  useFrame((state, delta) => {
    skySphereRef.current.rotation.set(
      -fromDegreeToRadian(rotateX),
      rotateY,
      rotateZ
    );
  });

  const [caculatedMovingRadus, setCaculatedMovingRadus] = useState(() =>
    caculateMovingRadiusByOffset(movingRadius, offsetFromEquater)
  );

  useEffect(() => {
    // let offsetFromEquaterControlled = dateInNumber * movingRadius * Math.sin(tropicRadian) / 365
    setCaculatedMovingRadus(
      caculateMovingRadiusByOffset(movingRadius, offsetFromEquater)
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
          <meshStandardMaterial
            transparent
            opacity={0.2}
            wireframe
            color={'royalblue'}
          />
        </Sphere>
      </mesh>
    </>
  );
}

export default SkyFromEarth;
