'use client';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { NextUIProvider } from '@nextui-org/react';
import Ground from './components/Ground';
import House from './components/House';
import SkyFromEarth from './components/SkyFromEarth';
import ControlPanel from './components/controlPanel';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex flex-col items-center p-8">
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 60 }}
          style={{
            width: '95vw',
            height: '90vh',
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
        <ControlPanel />
      </main>
    </NextUIProvider>
  );
}
