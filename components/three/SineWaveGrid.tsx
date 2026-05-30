"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SineGrid() {
  const pointsRef = useRef<THREE.Points>(null!);
  const timeRef = useRef(0);

  const { positions, initialY, cols, rows } = useMemo(() => {
    const cols = 60;
    const rows = 30;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const initialY = new Float32Array(count);
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c / (cols - 1) - 0.5) * 10;
        const z = (r / (rows - 1) - 0.5) * 5;
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = z;
        initialY[i] = 0;
        i++;
      }
    }
    return { positions, initialY, cols, rows };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    timeRef.current = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const y =
          Math.sin(x * 0.8 + timeRef.current * 1.2) * 0.3 +
          Math.sin(z * 1.2 + timeRef.current * 0.9) * 0.2;
        pos.setY(i, y);
        i++;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.04} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export default function SineWaveGrid() {
  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <SineGrid />
    </Canvas>
  );
}
