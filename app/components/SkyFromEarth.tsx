import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Sphere } from '@react-three/drei';
import {
  caculateMovingRadiusByOffset,
  distanceOffsetFromEquaterByDegree,
  fromDegreeToRadian,
} from '../util/utilies';
import SkyClock from './SkyClock';

const sunMoveSpeed = 1;
const defaultMovingRadius = 10;

function SkyFromEarth(props: ThreeElements['mesh']) {
  const skySphereRef = useRef<THREE.Mesh>(null!);
  const { rotateX, rotateY, rotateZ, movingRadius, offsetFromEquater } =
    useControls({
      rotateX: {
        value: 0,
        min: -90,
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
        min: -distanceOffsetFromEquaterByDegree(23.5),
        max: distanceOffsetFromEquaterByDegree(23.5),
        step: 0.01,
      }, // relates to time of a year
    });

  useFrame((state, delta) => {
    skySphereRef.current.rotation.set(
      fromDegreeToRadian(-rotateX),
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
            opacity={0.1}
            wireframe
            color={'white'}
          />
        </Sphere>
      </mesh>
    </>
  );
}

export default SkyFromEarth;
