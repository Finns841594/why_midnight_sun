import { MeshProps } from '@react-three/fiber';
import React, { useMemo } from 'react';
import { Euler, Vector3 } from 'three';
import dynamic from 'next/dynamic';
import { timeString } from '../util/datas';

const Annotation = dynamic(() => import('./Annotation'), {
  ssr: false,
});

interface SkyClockProps extends MeshProps {
  radius: number;
}

const SkyClock = ({ radius, ...props }: SkyClockProps) => {
  const { marks, hourMarks } = useMemo(() => {
    const marks = [];
    const hourMarks = [];

    for (let i = 0; i <= 24 * 5; i++) {
      const angle = (i / (24 * 5)) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      if (i % 5 == 0) {
        hourMarks.push({
          position: new Vector3(x, y, 0),
          rotation: new Euler(0, 0, angle), // Rotation around Z-axis
        });
      } else {
        marks.push({
          position: new Vector3(x, y, 0),
          rotation: new Euler(0, 0, angle),
        });
      }
    }
    return { marks, hourMarks };
  }, [radius]);

  return (
    <mesh {...props}>
      {marks.map((mark, index) => (
        <mesh key={index} position={mark.position} rotation={mark.rotation}>
          <boxGeometry args={[0.7, 0.05, 0.05]} />
          <meshBasicMaterial color={0xcccccc} />
        </mesh>
      ))}
      {hourMarks.map((mark, index) => {
        return (
          <mesh key={index} position={mark.position} rotation={mark.rotation}>
            <Annotation text={timeString[index]} />
          </mesh>
        );
      })}
    </mesh>
  );
};

export default SkyClock;
