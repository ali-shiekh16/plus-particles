import React, { forwardRef } from 'react';
import { Float32BufferAttribute } from 'three';
import { useEffect } from 'react';
import { useState } from 'react';
import PointsShaderMaterial from './shaders';
import { extend } from '@react-three/fiber';
import { useRef } from 'react';
import * as modelData from './modelData';
import * as THREE from 'three';
// import { MeshSurfaceSampler } from 'three/examples/jsm/math/meshsurfacesampler';
// import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';

extend({ PointsShaderMaterial });

const Model = forwardRef(({ pointsProps, shaderProps }, ref) => {
  const [modelRef1, modelRef2] = ref.current;
  // const [vertices, setVertices] = useState();
  // const [randomness, setRandomness] = useState();
  // const [floats, setFloats] = useState();

  // useEffect(() => {
  //   const pointsCount = 3000;
  //   const vertices = [];
  //   const randomness = [];
  //   const floats = [];
  //   const temp = new THREE.Vector3();

  //   new GLTFLoader().load('/hands.glb', ({ scene }) => {
  //     const obj = scene.children[0];
  //     const sampler = new MeshSurfaceSampler(obj).build();
  //     for (let i = 0; i < pointsCount; i++) {
  //       sampler.sample(temp);
  //       vertices.push(temp.x, temp.y, temp.z);

  //       randomness.push(
  //         (Math.random() - 0.5) * 10,
  //         (Math.random() - 0.5) * 5,
  //         (Math.random() - 0.5) * 8
  //       );

  //       floats.push(
  //         (Math.random() - 0.5) * 2,
  //         (Math.random() - 0.5) * 2,
  //         (Math.random() - 0.5) * 2
  //       );
  //     }

  //     setVertices(new Float32BufferAttribute(vertices, 3));
  //     setRandomness(new Float32BufferAttribute(randomness, 3));
  //     setFloats(new Float32BufferAttribute(floats, 3));
  //   });
  // }, []);

  // if (vertices && randomness && floats) {
  //   console.log([...vertices.array], 'vertices');
  //   console.log([...floats.array], 'floats');
  //   console.log([...randomness.array], 'randomness');
  // }

  return (
    <>
      <points
        {...pointsProps}
        scale={[0.2, 0.2, 0.2]}
        ref={modelRef1}
        position={[-3, 0, 0]}
        wireframe
      >
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            {...new Float32BufferAttribute(modelData.vertices, 3)}
          />
          <bufferAttribute
            attach='attributes-aRandom'
            {...new Float32BufferAttribute(modelData.randomness, 3)}
          />
          <bufferAttribute
            attach='attributes-aFloat'
            {...new Float32BufferAttribute(modelData.floats, 3)}
          />
        </bufferGeometry>
        <pointsShaderMaterial
          {...shaderProps}
          blending={THREE.AdditiveBlending}
          ref={modelRef2}
          uOpacity={0}
          uRandomness={150}
        />
      </points>
    </>
  );
});

export default Model;
