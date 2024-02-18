'use client';
import dynamic from 'next/dynamic';
import MainScene from './components/MainScene';

const ControlPanel = dynamic(() => import('./components/controlPanel'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-8 justify-center items-center ">
      <div className="w-[340px] md:w-[950px] md:h-[750px] h-[240px]">
        <MainScene />
      </div>
      <ControlPanel />
    </main>
  );
}
