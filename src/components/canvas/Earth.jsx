import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber"; //για 3d
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); //import earth model

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{fov: 45, near: 0.1, far: 200, position: [-4, 3, 6]}}
    >
      {/* Suspense, Καθως γεμιζει το 3d model θα πρεπει κατι να εμφανιζει */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls, για να κουνιεται το 3d model με το ποντικι */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          // How the rotation is happening
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
