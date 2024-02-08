import { Circle, Grid } from '@react-three/drei';
import React from 'react';
import { DoubleSide } from 'three';

function Ground() {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: '#bcbcbc',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };
  return (
    <>
      <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
      <Circle
        args={[25]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.02, 0]}
        receiveShadow
      >
        <meshStandardMaterial transparent opacity={0.5} side={DoubleSide} />
      </Circle>
    </>
  );
}

export default Ground;
