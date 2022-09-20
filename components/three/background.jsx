import React from 'react';
import { useMemo } from 'react';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import * as THREE from 'three';
import { extend, useLoader } from '@react-three/fiber';
import PointsShaderMaterial from './shaders';
import { forwardRef } from 'react';
import { PointMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';

// extend({ PointsShaderMaterial });

function BackgroundParticles({ shaderProps }) {
  const points = useMemo(() => {
    const particlesCount = 800;
    const positions = new Float32Array(particlesCount * 3);
    const spreadFactor = 30;
    for (let i = 0; i < particlesCount; i++) {
      positions[i] = (Math.random() - 0.5) * spreadFactor;
      positions[i + 1] = (Math.random() - 0.5) * spreadFactor;
      positions[i + 2] = (Math.random() - 0.5) * (spreadFactor - 2);
    }

    return new THREE.Float32BufferAttribute(positions, 3);
  }, []);

  const colorMap = useLoader(TextureLoader, '/plus.png');

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <PointMaterial
        size={0.2}
        color='#9e5e00'
        sizeAttenuation
        depthWrite={false}
        map={colorMap}
      />
    </points>
  );
}

export default BackgroundParticles;
