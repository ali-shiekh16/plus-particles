import { shaderMaterial } from '@react-three/drei';
// import { Vector2 } from 'three';
import * as THREE from 'three';

const pointsShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uSize: { value: 50 },
    uTime: { value: 0 },
    uRandomness: { value: 3 },
    uTexture: {
      value: 0,
    },
    uOpacity: { value: 1 },
    uPointer: {
      value: new THREE.Vector2(0, 0),
    },
    uAspect: {
      value:
        typeof window !== 'undefined' && window.innerWidth / window.innerHeight,
    },
  },
  // Vertex Shader
  `
	attribute vec3 aRandom;
	attribute vec3 aFloat;
  attribute vec3 color;

  uniform float uSize;
  uniform float uRandomness;
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uAspect;

  varying vec4 vPosition;
  varying vec4 vColor;
  varying float vDistance;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);


    modelPosition.xyz += aRandom.xyz * .01 * uRandomness;

    float frequency = .5;
    float amplitude = .05;

    modelPosition.x += cos(uTime * aFloat.x * frequency) * amplitude;
    modelPosition.y += sin(uTime * aFloat.y * frequency) * amplitude;


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    float distanceToMouse = 1.0 - clamp(length(uPointer.y - modelPosition.y), -0.5, 1.0);
    modelPosition.z += distanceToMouse * 2.0;

    gl_PointSize = uSize;
    gl_PointSize *= (1.0 / -viewPosition.z);

    vec2 posUV = projectedPosition.xy / projectedPosition.w;
    vec2 mouse = uPointer;
    vec2 asp = vec2(uAspect, 1.0);
    float d = distance(posUV * asp, mouse * asp) * 3.0;

    float lerpWeight = d / .6 ;
    if(d < .5) vColor = vec4(1, 1, 1, 0.9);
    else vColor = vec4(1, .6, 0, .9); 

    gl_Position = projectedPosition;

    vDistance = d;

    vPosition = projectedPosition;
  }
`,
  // Fragment Shader
  `
    uniform sampler2D uTexture;
    uniform float uOpacity;
    uniform vec3 uColor;

    varying vec4 vPosition;
    varying vec4 vColor;
    varying float vDistance;

    void main() {	

      vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
      vec4 textureColor = texture2D(uTexture, uv);
      if(textureColor.a < .4) discard;

      float lerpWeight = vDistance / .6 ;
      vec3 color = mix(vColor.xyz, vec3(1, .6, 0), lerpWeight);
      // !Temp code
      // vec3 color = mix(vColor.xyz, uColor.rgb, lerpWeight);

      gl_FragColor = vec4(textureColor.xyz * color, uOpacity); 
    } 
`
);

export default pointsShaderMaterial;
