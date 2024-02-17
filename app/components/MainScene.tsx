import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import SkyFromEarth from './SkyFromEarth';
import House from './House';
import Ground from './Ground';

const MainScene = () => {
  return (
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
  );
};

export default MainScene;
