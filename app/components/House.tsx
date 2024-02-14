import { ThreeElements } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Have an idea that the house changes when season changes

const House = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, 'threeDModels/squareScene.glb');

  gltf.scene.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      let mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      // mesh.receiveShadow = true;
      // mesh.material = new THREE.MeshStandardMaterial({
      //   color: 'white',
      //   side: THREE.DoubleSide,
      // });
    }
  });
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <primitive
        object={gltf.scene}
        scale={16}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh receiveShadow position={[0, -0.15, 0]}>
        <boxGeometry args={[8, 0.3, 8]} />
        <meshStandardMaterial color={'#cfcfcf'} />
      </mesh>
    </mesh>
  );
};

export default House;
