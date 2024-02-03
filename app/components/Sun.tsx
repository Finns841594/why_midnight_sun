import { Sphere } from '@react-three/drei';
import { ThreeElements, useFrame, useThree } from '@react-three/fiber';
import React, { useMemo, useRef, useState } from 'react';
import { BufferGeometry, LineBasicMaterial, Vector3 } from 'three';
import * as THREE from 'three';

interface GlobalTraceLineProps {
  positions: Vector3[];
}

const GlobalTraceLine: React.FC<{ positions: Vector3[] }> = ({ positions }) => {
  const { scene } = useThree();
  const lineGeometry = useMemo(
    () => new BufferGeometry().setFromPoints(positions),
    [positions]
  );
  const lineMaterial = useMemo(
    () => new LineBasicMaterial({ color: 'red', linewidth: 2 }),
    []
  );

  useMemo(() => {
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
    return () => {
      scene.remove(line);
    };
  }, [lineGeometry, lineMaterial, scene]);

  return null; // This component does not render anything itself
};

function Sun(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);

  const [tracePositions, setTracePositions] = useState<Vector3[]>([]);

  const radius = 1;

  useFrame((state, delta) => {
    setAngle(angle + delta);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    meshRef.current.position.set(x, y, meshRef.current.position.z);

    const globalPosition = new Vector3();

    // Use getWorldPosition to retrieve the global position of the mesh
    meshRef.current.getWorldPosition(globalPosition);
    setTracePositions(prevPositions =>
      [...prevPositions, globalPosition.clone()].slice(-100)
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
