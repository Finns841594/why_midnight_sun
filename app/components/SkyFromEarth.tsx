import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import Sun from './Sun';
import { useControls } from 'leva';
import { Circle, Sphere, Torus } from '@react-three/drei';
import { caculateMovingRadius } from '../util/utilies';
import {
  TorusGeometry,
  Vector3,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import SkyClock from './SkyClock';

const sunMoveSpeed = 1;
const defaultMovingRadius = 10;
const tropicRadian = (23.5 * Math.PI) / 180;

function SkyFromEarth(props: ThreeElements['mesh']) {
  const skySphereRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null);
  const { height, rotateX, rotateY, rotateZ, movingRadius, offsetFromEquater } =
    useControls({
      height: { value: 0, min: -2, max: 2, step: 0.1 },
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
  const [angle, setAngle] = useState(45);

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
        {/* <Torus
          ref={torusRef}
          args={[
            caculateMovingRadius(movingRadius, offsetFromEquater),
            0.7,
            3,
            48,
          ]}
          position={[0, 0, offsetFromEquater]}
        >
          <meshStandardMaterial color={'hotpink'} wireframe />
        </Torus> */}
        <SkyClock
          radius={caculateMovingRadius(movingRadius, offsetFromEquater)}
          position={[0, 0, offsetFromEquater]}
        />
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
