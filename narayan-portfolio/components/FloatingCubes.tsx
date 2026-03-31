'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface FloatingCubeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  offset: number;
}

function FloatingCube({ position, color, speed, scale, offset }: FloatingCubeProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.7;
    ref.current.rotation.y = t * speed;
    ref.current.position.y = position[1] + Math.sin(t * 0.6 + offset) * 0.4;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.45}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

const cubeData = [
  { position: [-8, 2, -3] as [number, number, number], speed: 0.4, scale: 0.7, offset: 0 },
  { position: [9, -1, -4] as [number, number, number], speed: 0.3, scale: 1.0, offset: 1.2 },
  { position: [-5, -3, -2] as [number, number, number], speed: 0.5, scale: 0.5, offset: 2.4 },
  { position: [6, 3, -5] as [number, number, number], speed: 0.25, scale: 0.8, offset: 0.8 },
  { position: [3, -4, -3] as [number, number, number], speed: 0.35, scale: 0.6, offset: 3.6 },
  { position: [-9, 1, -6] as [number, number, number], speed: 0.45, scale: 0.9, offset: 1.8 },
  { position: [8, -3, -2] as [number, number, number], speed: 0.28, scale: 0.55, offset: 2.1 },
  { position: [-3, 4, -4] as [number, number, number], speed: 0.38, scale: 0.65, offset: 4.2 },
];

// Dark mode: cool sky blues & violets
const darkColors = ['#38bdf8', '#818cf8', '#a78bfa', '#38bdf8', '#818cf8', '#0ea5e9', '#a78bfa', '#38bdf8'];
// Light mode: editorial Bauhaus — black, yellow, olive green
const lightColors = ['#1a1a1a', '#eab308', '#4d7c0f', '#d97706', '#1a1a1a', '#65a30d', '#fbbf24', '#3f6212'];

function Scene({ isDark }: { isDark: boolean }) {
  const colors = isDark ? darkColors : lightColors;
  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.8} />
      <pointLight position={[0, 0, 5]} intensity={isDark ? 0.5 : 1.5} color={isDark ? '#38bdf8' : '#eab308'} />
      {cubeData.map((cube, i) => (
        <FloatingCube key={i} {...cube} color={colors[i]} />
      ))}
    </>
  );
}

export default function FloatingCubes() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 70 }}
        gl={{ alpha: true, antialias: false }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
}
