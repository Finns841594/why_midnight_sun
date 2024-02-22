import { Center, Circle, Grid, Text3D } from '@react-three/drei';
import React from 'react';
import { DoubleSide, Vector3 } from 'three';

const markSize = 12;
const directionMarkData: { name: string; size: number; position: Vector3 }[] = [
  { name: 'N', size: 2, position: new Vector3(0, 0, -markSize) },
  { name: 'S', size: 1, position: new Vector3(0, 0, markSize) },
  { name: 'W', size: 1, position: new Vector3(-markSize, 0, 0) },
  { name: 'E', size: 1, position: new Vector3(markSize, 0, 0) },
];

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
    <mesh>
      {/* <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} /> */}
      <Circle
        args={[20]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.02, 0]}
      >
        <meshBasicMaterial transparent opacity={0.5} side={DoubleSide} />
      </Circle>
      {directionMarkData.map(item => {
        return (
          <mesh
            key={item.name}
            position={item.position}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <Center>
              <Text3D height={0.1} size={item.size} font="/Inter_Bold.json">
                {item.name}
                <meshBasicMaterial color={'#969696'} />
              </Text3D>
            </Center>
          </mesh>
        );
      })}
    </mesh>
  );
}

export default Ground;
