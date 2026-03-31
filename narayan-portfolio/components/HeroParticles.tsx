'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function ParticleField({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null!);
  const count = 180;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.08;
    ref.current.rotation.y = t;
    ref.current.rotation.x = Math.sin(t * 0.7) * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? '#38bdf8' : '#eab308'}
        size={isDark ? 0.05 : 0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={isDark ? 0.75 : 0.95}
      />
    </Points>
  );
}

function NetworkLines({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.LineSegments>(null!);

  const { positions } = useMemo(() => {
    const nodes: [number, number, number][] = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      nodes.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
      ]);
    }

    const linePositions: number[] = [];
    const threshold = 4.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < threshold) {
          linePositions.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    return { positions: new Float32Array(linePositions) };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.07;
    ref.current.rotation.y = t;
    ref.current.rotation.x = Math.sin(t * 0.6) * 0.12;
  });

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <lineSegments ref={ref} geometry={geo}>
      <lineBasicMaterial
        color={isDark ? '#0ea5e9' : '#4d7c0f'}
        transparent
        opacity={isDark ? 0.18 : 0.45}
      />
    </lineSegments>
  );
}

export default function HeroParticles() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== 'light';

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: false }}
      >
        <ParticleField isDark={isDark} />
        <NetworkLines isDark={isDark} />
      </Canvas>
    </div>
  );
}
