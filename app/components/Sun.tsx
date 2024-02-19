import { Sphere } from '@react-three/drei';
import { MeshProps, useFrame } from '@react-three/fiber';
import { useContext, useRef } from 'react';
import { AppContext } from '../AppContext';
import {
  calculateTimeFromPosition,
  getPositionFromTime,
} from '../util/utilies';

const sunMoveSpeed = 20;

interface SunProps extends MeshProps {
  movingRadius: number;
}

function Sun({ movingRadius, ...props }: SunProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const { sunPositions, setSunPositions, isSettingSunPosition } =
    useContext(AppContext);

  useFrame((state, delta) => {
    if (!isSettingSunPosition) {
      let currentTime = calculateTimeFromPosition(
        sunPositions.x,
        sunPositions.y,
        movingRadius
      );
      currentTime += delta * sunMoveSpeed;
      let { x, y } = getPositionFromTime(currentTime, movingRadius);
      meshRef.current.position.set(x, y, 0);
      setSunPositions(meshRef.current.position.clone());
    } else {
      meshRef.current.position.set(
        (sunPositions.x * movingRadius) / 10, // the cordinate stores in the state are based on radius is 10, so here needs an extra calculation
        (sunPositions.y * movingRadius) / 10,
        0
      );
    }
  });
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <pointLight
        position={sunPositions}
        decay={0}
        intensity={2 * Math.PI}
        castShadow
      />
      <Sphere args={[0.5]}>
        <meshBasicMaterial color={'orange'} />
      </Sphere>
    </mesh>
  );
}

export default Sun;
