import { MeshProps, ThreeElements } from '@react-three/fiber';
import React from 'react';
import { Euler, Vector3 } from 'three';

interface SkyClockProps extends MeshProps {
  radius: number;
}

const SkyClock = ({ radius, ...props }: SkyClockProps) => {
  const marks = [];

  for (let i = 0; i <= 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    marks.push({
      position: new Vector3(x, y, 0),
      rotation: new Euler(0, 0, angle), // Rotation around Z-axis
    });
  }
  return (
    <mesh {...props}>
      {marks.map((mark, index) => (
        <mesh key={index} position={mark.position} rotation={mark.rotation}>
          <boxGeometry args={[2, 0.1, 0.1]} />
          <meshBasicMaterial color={0xff0000} />
        </mesh>
      ))}
    </mesh>
  );
};

export default SkyClock;
