'use client';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import Ground from './components/Ground';
import House from './components/House';
import SkyFromEarth from './components/SkyFromEarth';

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
        <SkyFromEarth position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <House />
        <Ground />
      </Canvas>
    </main>
  );
}
