'use client';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import dynamic from 'next/dynamic';
import Ground from './components/Ground';
import House from './components/House';
import SkyFromEarth from './components/SkyFromEarth';
import Footer from './components/Footer';
import Header from './components/Header';

const ControlPanel = dynamic(() => import('./components/controlPanel'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col p-4 md:p-8 gap-8 mx-auto">
      <Header />
      <section className="flex flex-col md:flex-row gap-8 mx-auto">
        <div className="w-[340px] md:w-[950px] md:h-[750px] h-[240px]">
          <Canvas
            shadows
            camera={{ position: [14, 5, 15], fov: 60 }}
            style={{
              border: '1px solid #ffffff',
              borderRadius: '6px',
            }}
          >
            <CameraControls />
            {/* <axesHelper args={[10]} /> */}
            <ambientLight intensity={Math.PI / 4} />
            <SkyFromEarth position={[0, 0, 0]} rotation={[0, 0, 0]} />
            <House />
            <Ground />
          </Canvas>
        </div>
        <ControlPanel />
      </section>

      <Footer />
    </main>
  );
}
