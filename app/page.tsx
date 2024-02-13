'use client';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import Ground from './components/Ground';
import House from './components/House';
import SkyFromEarth from './components/SkyFromEarth';
import ControlPanel from './components/controlPanel';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row p-8 gap-8 mx-auto">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{
          width: '1200px',
          height: '750px',
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
  );
}
