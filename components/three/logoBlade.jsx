import React, { useMemo, forwardRef } from 'react';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import PointsShaderMaterial from './shaders';

extend({ PointsShaderMaterial });

const LogoBlade = forwardRef(({ pointsProps, shaderProps }, ref) => {
  const points = useMemo(() => {
    const box = new THREE.Mesh(
      new THREE.BoxBufferGeometry(0.7, 5, 0.5, 32, 32),
      new THREE.Material({ color: '#000' })
    );
    const sampler = new MeshSurfaceSampler(box).build();

    const tempPosition = new THREE.Vector3();
    const vertices = [];
    const randomness = [];
    const floats = [];
    for (let index = 0; index < 1000; index++) {
      sampler.sample(tempPosition);
      vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
      randomness.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 8
      );

      floats.push(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
    }

    return [
      new THREE.Float32BufferAttribute(vertices, 3),
      new THREE.Float32BufferAttribute(randomness, 3),
      new THREE.Float32BufferAttribute(floats, 3),
    ];
  }, []);

  return (
    <points {...pointsProps}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points[0]} />
        <bufferAttribute attach={'attributes-aRandom'} {...points[1]} />
        <bufferAttribute attach={'attributes-aFloat'} {...points[2]} />
      </bufferGeometry>
      <pointsShaderMaterial {...shaderProps} ref={ref} />
    </points>
  );
});

export default LogoBlade;
