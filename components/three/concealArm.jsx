import React, { forwardRef } from 'react';
import { extend } from '@react-three/fiber';
import PointsShaderMaterial from './shaders';
import ConcealerBox from './concealer';
import { useRef } from 'react';

extend({ PointsShaderMaterial });

const ConcealArm = forwardRef(({ rotationZ = 0, shaderProps }, ref) => {
  const props = { ...shaderProps };
  const [ref1, ref2] = ref.current;

  return (
    <group rotation={[0, 0, Math.PI / 3 + rotationZ]}>
      <ConcealerBox
        ref={ref1}
        pointsProps={{
          rotation: [0, 0, 2.983],
          position: [0.76, 1.09, 0],
        }}
        shaderProps={props}
      />
      <ConcealerBox
        ref={ref2}
        pointsProps={{
          rotation: [0, 0, 2.778],
          position: [-0.072, 1.35, 0],
        }}
        shaderProps={props}
      />
    </group>
  );
});

export default ConcealArm;
