import { Sphere } from '@react-three/drei';
import { MeshProps, ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';

const sunMoveSpeed = 1;

const caculateMovingRadius = (
  movingRadius: number,
  offsetFromEquater: number
) => {
  return Math.sqrt(movingRadius ** 2 - offsetFromEquater ** 2);
};

interface SunProps extends MeshProps {
  movingRadius: number;
  offsetFromEquater: number;
}

function Sun({ movingRadius, offsetFromEquater, ...props }: SunProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);

  const [tracePositions, setTracePositions] = useState<Vector3[]>([]);

  movingRadius = caculateMovingRadius(movingRadius, offsetFromEquater);

  useFrame((state, delta) => {
    setAngle(angle + (delta * 1 * sunMoveSpeed) / movingRadius);
    const x = movingRadius * Math.cos(angle);
    const y = movingRadius * Math.sin(angle);
    const z = offsetFromEquater;

    meshRef.current.position.set(x, y, z);

    const globalPosition = new Vector3();
    meshRef.current.getWorldPosition(globalPosition); // I don't know it before that one can assign value like this
    setTracePositions(prevPositions =>
      [...prevPositions, globalPosition.clone()].slice(-10)
    );
  });
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => (event.stopPropagation(), setHover(true))} //.stopPropagation helps save the resource by limiting this event here in this component only
      onPointerOut={event => (event.stopPropagation(), setHover(false))}
    >
      <pointLight
        position={tracePositions[tracePositions.length - 1]}
        decay={0}
        intensity={Math.PI}
        castShadow
      />
      <Sphere args={[0.5]}>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </Sphere>
    </mesh>
  );
}

export default Sun;
