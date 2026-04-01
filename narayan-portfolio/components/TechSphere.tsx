'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function GlowOrb({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.12;
  });

  return (
    <Sphere ref={meshRef} args={[1.4, 64, 64]}>
      <MeshDistortMaterial
        color={isDark ? '#0ea5e9' : '#d97706'}
        emissive={isDark ? '#0369a1' : '#92400e'}
        emissiveIntensity={isDark ? 0.6 : 0.35}
        roughness={isDark ? 0.15 : 0.25}
        metalness={isDark ? 0.8 : 0.7}
        distort={0.4}
        speed={1.8}
        transparent
        opacity={isDark ? 0.85 : 0.92}
      />
    </Sphere>
  );
}

function OrbitRing1({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.5;
    ref.current.rotation.x = Math.PI / 2 + Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
  });
  return (
    <Torus ref={ref} args={[2.1, 0.015, 16, 100]}>
      <meshBasicMaterial
        color={isDark ? '#38bdf8' : '#1a1a1a'}
        transparent
        opacity={isDark ? 0.5 : 0.6}
      />
    </Torus>
  );
}

function OrbitRing2({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.7;
    ref.current.rotation.z = Math.PI / 4;
  });
  return (
    <Torus ref={ref} args={[2.5, 0.012, 16, 100]}>
      <meshBasicMaterial
        color={isDark ? '#818cf8' : '#4d7c0f'}
        transparent
        opacity={isDark ? 0.35 : 0.6}
      />
    </Torus>
  );
}

function OrbitRing3({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.4;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.25;
  });
  return (
    <Torus ref={ref} args={[1.9, 0.01, 16, 100]}>
      <meshBasicMaterial
        color={isDark ? '#a78bfa' : '#eab308'}
        transparent
        opacity={isDark ? 0.4 : 0.7}
      />
    </Torus>
  );
}

function SatelliteDots({ isDark }: { isDark: boolean }) {
  const group = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.6;
    group.current.rotation.x = clock.getElapsedTime() * 0.25;
  });

  const dots = isDark
    ? [
        { pos: [2.1, 0, 0] as [number, number, number], color: '#38bdf8' },
        { pos: [-2.1, 0.8, 0] as [number, number, number], color: '#818cf8' },
        { pos: [0, 2.3, 0] as [number, number, number], color: '#a78bfa' },
        { pos: [1.2, -1.8, 0.5] as [number, number, number], color: '#38bdf8' },
      ]
    : [
        { pos: [2.1, 0, 0] as [number, number, number], color: '#eab308' },
        { pos: [-2.1, 0.8, 0] as [number, number, number], color: '#4d7c0f' },
        { pos: [0, 2.3, 0] as [number, number, number], color: '#1a1a1a' },
        { pos: [1.2, -1.8, 0.5] as [number, number, number], color: '#d97706' },
      ];

  return (
    <group ref={group}>
      {dots.map((dot, i) => (
        <mesh key={i} position={dot.pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color={dot.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function TechSphere() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  return (
    <div className="w-full h-full" style={{ minHeight: '380px' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={isDark ? 0.4 : 1.0} />
        <pointLight position={[5, 5, 5]} intensity={isDark ? 2 : 3} color={isDark ? '#38bdf8' : '#eab308'} />
        <pointLight position={[-5, -5, -3]} intensity={isDark ? 1 : 2} color={isDark ? '#818cf8' : '#4d7c0f'} />
        <GlowOrb isDark={isDark} />
        <OrbitRing1 isDark={isDark} />
        <OrbitRing2 isDark={isDark} />
        <OrbitRing3 isDark={isDark} />
        <SatelliteDots isDark={isDark} />
      </Canvas>
    </div>
  );
}
