import { ThreeElements } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';

const House = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, 'low_poly_city/scene.gltf');
  return (
    <mesh {...props} ref={meshRef} scale={1} castShadow>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={'orange'} /> */}
      <primitive object={gltf.scene} scale={0.05} castShadow receivShadow />;
    </mesh>
  );
};

export default House;
