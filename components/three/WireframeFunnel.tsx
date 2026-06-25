"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Funnel() {
  const funnelRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (funnelRef.current) {
      funnelRef.current.rotation.y = t * 0.3;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y = -t * 0.6;
      orbitRef.current.rotation.z = Math.sin(t * 0.4) * 0.3;
    }
  });

  return (
    <group>
      {/* Wireframe funnel cone */}
      <mesh ref={funnelRef} position={[0, -1.2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[2.2, 2.4, 32, 8, true]} />
        <meshBasicMaterial color="#303145" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Orbiting sphere */}
      <group ref={orbitRef}>
        <mesh position={[1.8, 0.8, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color="#f09bb0" />
        </mesh>

        {/* Orbit path ring */}
        <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
          <torusGeometry args={[1.95, 0.004, 4, 80]} />
          <meshBasicMaterial color="#888" transparent opacity={0.3} />
        </mesh>
      </group>

      {/* Spiral path above */}
      <SpiralPath />
    </group>
  );
}

function SpiralPath() {
  const ref = useRef<THREE.Line>(null!);

  const curve = new THREE.CatmullRomCurve3(
    (() => {
      const pts: THREE.Vector3[] = [];
      const turns = 3;
      const steps = 80;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const angle = t * turns * Math.PI * 2;
        const radius = 0.6 + t * 1.3;
        const y = 2.5 - t * 2.5;
        pts.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
      }
      return pts;
    })()
  );

  const points = curve.getPoints(120);
  const geo = new THREE.BufferGeometry().setFromPoints(points);

  return (
    // @ts-ignore
    <line ref={ref} geometry={geo}>
      <lineBasicMaterial color="#ad8fdb" transparent opacity={0.8} />
    </line>
  );
}

export default function WireframeFunnel() {
  return (
    <Canvas
      camera={{ position: [0, 1, 7], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Funnel />
    </Canvas>
  );
}
