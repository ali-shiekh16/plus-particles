import React from 'react';
import { useMemo } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';

function BackgroundParticles() {
  const points = useMemo(() => {
    const particlesCount = 800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const spreadFactor = 30;
    const themeColors = [
      [255, 220, 142],
      [255, 175, 0],
      [251, 187, 46],
      [252, 196, 73],
    ];

    for (let i = 0; i < particlesCount; i++) {
      positions[i] = (Math.random() - 0.5) * spreadFactor;
      positions[i + 1] = (Math.random() - 0.5) * spreadFactor;
      positions[i + 2] = (Math.random() - 0.5) * spreadFactor * 0.3;

      const randColor = themeColors[Math.floor(Math.random() * 3)];

      colors[i + 0] = randColor[0] / 255;
      colors[i + 1] = randColor[1] / 255;
      colors[i + 2] = randColor[2] / 255;
    }

    const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
    const colorAttribute = new THREE.Float32BufferAttribute(colors, 3);

    return [positionAttribute, colorAttribute];
  }, []);

  const colorMap = useLoader(TextureLoader, '/plus.png');

  return (
    <points position={[0, 0, -5]}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points[0]} />
        <bufferAttribute attach={'attributes-color'} {...points[1]} />
      </bufferGeometry>
      <PointMaterial
        transparent={true}
        opacity={1}
        size={0.5}
        color='#9e5e00'
        alphaMap={colorMap}
        alphaTest={0.001}
        depthWrite={false}
        sizeAttenuation
        vertexColors
      />
    </points>
  );
}

export default BackgroundParticles;
