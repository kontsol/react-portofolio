import React, {useState, useRef, Suspense} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Points, PointMaterial, Preload} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // Float32 ρυθμιζει το ποσα αστερια θα εμφανιζονται
  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2});

  // χρησιμοποιειται για rotate τα αστερια
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 5;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    // για να εχουν rotate τα αστερια πρεπει να εχει ολο το group
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
