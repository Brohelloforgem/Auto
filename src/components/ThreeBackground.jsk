import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshWobbleMaterial, Sphere } from '@react-three/drei'

export default function ThreeBackground() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
          <MeshWobbleMaterial attach="material" color="#4F46E5" speed={2} factor={0.6} />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
