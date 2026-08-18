'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props) {
  const ref = useRef();
  // Generate random points in a sphere and sanitize NaN values if any occur
  const [sphere] = useState(() => {
    const data = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) {
        data[i] = 0;
      }
    }
    return data;
  });

  useFrame((state, delta) => {
    // Slowly rotate the particle field
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ParticleField />
    </Canvas>
  );
}
