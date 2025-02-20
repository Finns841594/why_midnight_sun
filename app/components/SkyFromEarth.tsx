import { ThreeElements, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Sphere } from '@react-three/drei';
import {
  caculateMovingRadiusByOffset,
  distanceOffsetFromEquaterByDegree,
  fromDegreeToRadian,
} from '../util/utilies';
import SkyClock from './SkyClock';
import { MathUtils } from 'three';

const movingRadius = 10;

function SkyFromEarth(props: ThreeElements['mesh']) {
  const skySphereRef = useRef<THREE.Mesh>(null!);
  const skyClockRef = useRef<THREE.Mesh>(null!);
  const { rotateX, offsetFromEquater } = useControls({
    rotateX: {
      value: 0,
      min: -90,
      max: 90,
      step: 1,
    }, // relates to latitude
    offsetFromEquater: {
      value: 0,
      min: -distanceOffsetFromEquaterByDegree(23.5),
      max: distanceOffsetFromEquaterByDegree(23.5),
      step: 0.01,
    }, // relates to time of a year
  });
  const [caculatedMovingRadus, setCaculatedMovingRadus] = useState(() =>
    caculateMovingRadiusByOffset(movingRadius, offsetFromEquater)
  );

  useFrame((state, delta) => {
    // Smooth rotation for skySphereRef
    const targetX = fromDegreeToRadian(rotateX);
    const currentX = skySphereRef.current.rotation.x;
    const lerpFactorSkySphereRef = 0.05;
    const newX = MathUtils.lerp(currentX, targetX, lerpFactorSkySphereRef);
    skySphereRef.current.rotation.x = newX;

    // Smooth transition for skyClockRef
    const targetZ = offsetFromEquater;
    const currentZ = skyClockRef.current.position.z;
    const lerpFactorSkyClockRef = 0.05;
    const newZ = MathUtils.lerp(currentZ, targetZ, lerpFactorSkyClockRef);
    const newMovingRadius = caculateMovingRadiusByOffset(movingRadius, newZ);
    skyClockRef.current.position.z = newZ;
    setCaculatedMovingRadus(newMovingRadius);
  });

  return (
    <>
      <mesh {...props} ref={skySphereRef}>
        <mesh ref={skyClockRef}>
          <Sun movingRadius={caculatedMovingRadus} />
          <SkyClock radius={caculatedMovingRadus} />
        </mesh>
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
