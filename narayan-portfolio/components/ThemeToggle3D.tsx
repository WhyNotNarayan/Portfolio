'use client';

import { useRef } from 'react';
import { useTheme } from 'next-themes';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function SunMoonMesh({ theme }: { theme: string }) {
  const group = useRef<THREE.Group>(null!);
  const targetY = useRef(0);

  const isDark = theme === 'dark' || theme === 'system';

  useFrame(({ clock }, delta) => {
    if (!group.current) return;

    // Ambient wobble
    group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    group.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.5) * 0.05;

    // Spring-like interpolation toward target rotateY (replaces framer-motion-3d)
    targetY.current = isDark ? 0 : Math.PI;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY.current,
      Math.min(delta * 5, 1)
    );
  });

  return (
    <group ref={group}>
      {/* MOON SIDE (Z > 0) */}
      <group position={[0, 0, 0.2]}>
        <Sphere args={[1.2, 32, 32]}>
          <meshStandardMaterial color="#94a3b8" roughness={0.8} />
        </Sphere>
        {/* Craters */}
        <Sphere args={[0.3, 16, 16]} position={[0.4, 0.4, 1.1]}>
          <meshStandardMaterial color="#64748b" roughness={0.9} />
        </Sphere>
        <Sphere args={[0.2, 16, 16]} position={[-0.5, -0.2, 1.15]}>
          <meshStandardMaterial color="#64748b" roughness={0.9} />
        </Sphere>
        <Sphere args={[0.25, 16, 16]} position={[0.2, -0.6, 1.05]}>
          <meshStandardMaterial color="#64748b" roughness={0.9} />
        </Sphere>
      </group>

      {/* SUN SIDE (Z < 0) - rotated Y by Math.PI so faces camera in light mode */}
      <group position={[0, 0, -0.2]} rotation={[0, Math.PI, 0]}>
        <Sphere args={[1.2, 32, 32]}>
          <meshStandardMaterial color="#facc15" emissive="#eab308" emissiveIntensity={0.5} />
        </Sphere>
        {/* Rays / Corona */}
        <Torus args={[1.6, 0.08, 16, 30]}>
          <meshStandardMaterial color="#fde047" emissive="#facc15" emissiveIntensity={1} />
        </Torus>
        <Torus args={[1.9, 0.04, 16, 30]} rotation={[0.2, 0.2, 0]}>
          <meshStandardMaterial color="#fef08a" emissive="#fde047" emissiveIntensity={0.8} />
        </Torus>
      </group>
    </group>
  );
}

export default function ThemeToggle3D() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform relative z-50"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title="Toggle Theme"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true }} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1.5} />
        <SunMoonMesh theme={theme || 'dark'} />
      </Canvas>
    </div>
  );
}
