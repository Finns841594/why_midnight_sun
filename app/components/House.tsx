import { ThreeElements } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const House = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, 'threeDModels/low_poly_earth.glb');
  // Traverse the model and set each mesh to cast and receive shadows
  gltf.scene.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      let mesh = child as THREE.Mesh;
      // mesh.castShadow = true;
      // mesh.receiveShadow = true;
      mesh.material = new THREE.MeshStandardMaterial({
        color: 'white',
        side: THREE.DoubleSide,
      });
      // console.log(mesh);
    }
  });
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={'orange'} /> */}
      <primitive object={gltf.scene} scale={2} />
    </mesh>
  );
};

export default House;
