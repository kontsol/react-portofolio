import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";
//Decal, for texture
// OrbitControl για να κινειται

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); //φωτογραφιες (texture), οι φωτο βρισκονται στα assets

  return (
    <Float speed={2.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.25]} />
      {/* Χωρις το mesh δεν φαινονται τα balls */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* βαζει μια γκρι σκια μεσα στο ball*/}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};
// export σαν ballcanvas οχι σαν ball
const BallCanvas = ({icon}) => {
  return (
    <Canvas frameloop="demand" gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
