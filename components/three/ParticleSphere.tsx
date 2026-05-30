"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, count } = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      positions[i * 3] = Math.cos(theta) * radius * 2.2;
      positions[i * 3 + 1] = y * 2.2;
      positions[i * 3 + 2] = Math.sin(theta) * radius * 2.2;
    }
    return { positions, count };
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.12;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.07) * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  );
}

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = -clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 16, 16]} />
      <meshBasicMaterial color="#444" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

export default function ParticleSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Particles />
      <WireframeSphere />
    </Canvas>
  );
}
