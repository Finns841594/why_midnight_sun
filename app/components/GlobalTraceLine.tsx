import { useThree } from '@react-three/fiber';
import React, { useMemo } from 'react';
import { Line, BufferGeometry, LineBasicMaterial, Vector3 } from 'three';

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
    const line = new Line(lineGeometry, lineMaterial);
    scene.add(line);
    return () => {
      scene.remove(line);
    };
  }, [lineGeometry, lineMaterial, scene]);

  return null; // This component does not render anything itself
};

export default GlobalTraceLine;
