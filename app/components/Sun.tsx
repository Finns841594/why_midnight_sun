import { Sphere } from '@react-three/drei';
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';

const sunMoveSpeed = 1;

interface SunProps extends MeshProps {
  movingRadius: number;
}

function Sun({ movingRadius, ...props }: SunProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [angle, setAngle] = useState(0);

  const [tracePositions, setTracePositions] = useState<Vector3[]>([]);

  useFrame((state, delta) => {
    setAngle(angle + (delta * 1 * sunMoveSpeed) / movingRadius);
    const x = movingRadius * Math.cos(angle);
    const y = movingRadius * Math.sin(angle);

    meshRef.current.position.set(x, y, meshRef.current.position.z);

    const globalPosition = new Vector3();
    meshRef.current.getWorldPosition(globalPosition); // I don't know it before that one can assign value like this
    setTracePositions(prevPositions =>
      [...prevPositions, globalPosition.clone()].slice(-10)
    );
  });
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <pointLight
        position={tracePositions[tracePositions.length - 1]}
        decay={0}
        intensity={2 * Math.PI}
        // shadow-mapSize-width={2048} //Increase shadow resolution
        // shadow-mapSize-height={2048}
        castShadow
      />
      <Sphere args={[0.5]}>
        <meshBasicMaterial color={'orange'} />
      </Sphere>
    </mesh>
  );
}

export default Sun;
