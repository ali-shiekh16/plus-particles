import React, { useRef } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import SecondSection from '../components/SecondSection/SecondSection';
import ThirdSection from '../components/ThirdSection/ThirdSection';
import { Canvas } from '@react-three/fiber';
import Logo from '../components/three/logo';

const Home = () => {
  const secRef1 = useRef();
  const secRef2 = useRef();
  const secRef3 = useRef();

  return (
    <>
      <Canvas
        style={canvasStyle}
        camera={{ position: [0, 0, 8] }}
        pixelratio={1}
      >
        {/* <color attach='background' args={['white']} /> */}
        <Logo refs={[secRef1, secRef2, secRef3]} />
      </Canvas>
      <section className='section' ref={secRef1}>
        <Head>
          <title>Home Page</title>
        </Head>
        <Hero />
        <SecondSection />
        <ThirdSection />
      </section>
    </>
  );
};

const canvasStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  outline: 'none',
  // zIndex: '-1',
  // pointerEvents: 'none',
};

export default Home;
