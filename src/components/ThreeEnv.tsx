import { Circle, OrbitControls, Plane } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export const ThreeEnv = () => {
  return (
    <div>
      <Canvas style={{ width: 1280, height: 720 }} camera={{ position: [7, 7, 10] }} shadows>
        <pointLight position={[10, 8, 10]} intensity={100} color="#fff" castShadow />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls makeDefault />
        <Circle args={[20]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow></Circle>
      </Canvas>
    </div>
  )
}