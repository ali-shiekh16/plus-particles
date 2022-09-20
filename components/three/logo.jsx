import React, { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import useMousePosition from '../../hooks/useMouseMove';
import PointsShaderMaterial from './shaders';
import LogoBlade from './logoBlade';
import ConcealArm from './concealArm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Vector2 } from 'three';

gsap.registerPlugin(ScrollTrigger);

extend({ PointsShaderMaterial });

const shaderProps = {
  transparent: true,
  depthWrite: false,
  uOpacity: 1,
  uSize: 50,
  uRandomness: 1,
  uPointer: new Vector2(0, 0),
};

const loadTexture = () => new THREE.TextureLoader().load('/plus.png');
const getAspect = window => window.innerWidth / window.innerHeight;

const Logo = ({ refs }) => {
  const logoRef = useRef();
  const bladeRef1 = useRef();
  const bladeRef2 = useRef();

  const concealRef1a = useRef();
  const concealRef1b = useRef();
  const concealRef1 = useRef([concealRef1a, concealRef1b]);

  const concealRef2a = useRef();
  const concealRef2b = useRef();
  const concealRef2 = useRef([concealRef2a, concealRef2b]);

  const concealRef3a = useRef();
  const concealRef3b = useRef();
  const concealRef3 = useRef([concealRef3a, concealRef3b]);

  const concealRef4a = useRef();
  const concealRef4b = useRef();
  const concealRef4 = useRef([concealRef4a, concealRef4b]);

  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    const tl = new gsap.timeline({
      scrollTrigger: {
        toggleActions: 'restart continue reverse continue',
        trigger: refs[0].current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl.to(
      logoRef.current.position,
      {
        x: -2,
      },
      -1
    );

    tl.to(
      logoRef.current.rotation,
      {
        y: Math.PI,
      },
      -1
    );

    const materialRefs = [
      bladeRef1,
      bladeRef2,
      concealRef1a,
      concealRef1b,
      concealRef2a,
      concealRef2b,
      concealRef3a,
      concealRef3b,
      concealRef4a,
      concealRef4b,
    ];

    materialRefs.forEach(ref =>
      gsap.from(ref.current, {
        duration: 0.5,
        uRandomness: 150,
        ease: 'fade.in',
      })
    );

    materialRefs.forEach(ref =>
      gsap.from(ref.current, { duration: 1, uOpacity: 0, ease: 'fade.in' })
    );

    materialRefs.forEach(material =>
      tl.to(
        material.current,
        {
          uRandomness: 150,
        },
        0
      )
    );

    const updateMousePosition = e => {
      let x = (e.clientX / window.innerWidth) * 2 - 1;
      let y = -(e.clientY / window.innerHeight) * 2 + 1;
      materialRefs.forEach(ref => {
        ref.current.uPointer = new Vector2(x, y);
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useFrame(() => {
    const time = clockRef.current.getElapsedTime();

    const materialRefs = [
      bladeRef1,
      bladeRef2,
      concealRef1a,
      concealRef1b,
      concealRef2a,
      concealRef2b,
      concealRef3a,
      concealRef3b,
      concealRef4a,
      concealRef4b,
    ];

    materialRefs.forEach(ref => (ref.current.uTime = time));
  });

  return (
    <group ref={logoRef} rotation={[0, 0, Math.PI / 6]} scale={[1.2, 1.2, 1.2]}>
      <ConcealArm
        ref={concealRef1}
        shaderProps={{
          ...shaderProps,
          uTexture: window && loadTexture(),
          uAspect: window && getAspect(window),
        }}
      />
      <ConcealArm
        ref={concealRef2}
        shaderProps={{
          ...shaderProps,
          uTexture: window && loadTexture(),
          uAspect: window && getAspect(window),
        }}
        rotationZ={Math.PI}
      />
      <ConcealArm
        ref={concealRef3}
        shaderProps={{
          ...shaderProps,
          uTexture: window && loadTexture(),
          uAspect: window && getAspect(window),
        }}
        rotationZ={Math.PI / 2}
      />
      <ConcealArm
        ref={concealRef4}
        shaderProps={{
          ...shaderProps,
          uTexture: window && loadTexture(),
          uAspect: window && getAspect(window),
        }}
        rotationZ={-Math.PI / 2}
      />
      <LogoBlade
        ref={bladeRef1}
        pointsProps={{
          rotation: [0, 0, Math.PI / 4],
        }}
        shaderProps={{
          ...shaderProps,
          uTexture: window && loadTexture(),
          uAspect: window && getAspect(window),
        }}
      />
      <LogoBlade
        ref={bladeRef2}
        pointsProps={{
          rotation: [0, 0, -Math.PI / 4],
        }}
        shaderProps={{
          ...shaderProps,
          uTexture: window && loadTexture(),
          uAspect: window && getAspect(window),
        }}
      />
    </group>
  );
};

export default Logo;
