'use client';
import { Canvas } from '@react-three/fiber';
import TestBox from './components/TestBox';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <TestBox position={[-1.2, 0, 0]} />
        <TestBox position={[1.2, 0, 0]} />
      </Canvas>
    </main>
  );
}
