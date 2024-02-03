import { Sphere } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';
import GlobalTraceLine from './GlobalTraceLine';

const sunMoveSpeed = 1;
const radius = 2;

function Sun(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);

  const [tracePositions, setTracePositions] = useState<Vector3[]>([]);

  useFrame((state, delta) => {
    setAngle(angle + (delta * 1 * sunMoveSpeed) / radius);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    meshRef.current.position.set(x, y, meshRef.current.position.z);

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
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <Sphere args={[0.5]}>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </Sphere>
      <GlobalTraceLine positions={tracePositions} />
    </mesh>
  );
}

export default Sun;
