'use client';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import Ground from './components/Ground';
import Sun from './components/Sun';
import House from './components/House';
import TestSun from './components/TestSun';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{
          width: '100vw',
          height: '100vh',
          border: '1px solid #ffffff',
          borderRadius: '6px',
        }}
      >
        <CameraControls />
        <ambientLight intensity={Math.PI / 2} />
        {/* <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
        <Sun position={[0, 0, 0]} />
        <TestSun position={[0, 0, 0]} />
        <House />
        <Ground />
      </Canvas>
    </main>
  );
}
