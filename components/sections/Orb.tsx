"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function BlueOrb() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />
        <MeshDistortMaterial
          color="#2563eb"
          emissive="#0b3b9e"
          emissiveIntensity={0.8}
          roughness={0.15}
          metalness={0.65}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Orb() {
  return (
    <div className="orb-canvas">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={2.5} />
        <pointLight position={[-3, -2, 2]} color="#3b82f6" intensity={30} />
        <BlueOrb />
      </Canvas>
    </div>
  );
}