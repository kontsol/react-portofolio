import React, {useEffect, useState, Suspense} from "react";
// Suspense χρησιμοποιειται για να αναστελει ενα component Καθως φορτωνουν το data
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

// useGLTF επιτρεπει την εισαγωγη 3d αντικειμενων

import CanvasLoader from "../Loader";

const Computers = (isMobile) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // το mesh προερχεται απο την three.js και χρησιμοποιειται για την εμφανισει 3d αντικειμενων
    <mesh>
      {/* hemisphereLight, pointLight, spotLight ανηκουν στην threejs χρησιμοποιουνται για τον φωτισμο 3d αντικειμενων */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* το primitive χρησιμοποιειται για την εμφανιση ενος συγκεκριμενου 3d αντικειμενου */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect για manual DOM manipulation και για χειρισμο παρενεργειών που σχετίζονται με αλλαγές μεγέθους οθόνης
  useEffect(() => {
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");
    // Set initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches); //matches προερχεται απο το matchmedia και λειτουργει οταν το width κανει match με το 500px και επιστρεφει true/false

    // Define callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); //μπαινει η καθε τιμη του width απο change και επιστρεφει false, true
    };

    //Add a callback function as a listener for changes to the media query
    //το mediaQuery που εχει το window, καθως μικραινει το width στο setismobile μπαινει η καθε τιμη του width, αν δεν ειναι 500px επιστρεφει false
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted (removed from the DOM)
    return () => {
      // Cleanup function, βγαινει το listener για να καθαρισει η μνημη
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); //κενος πινακας, το useEffect θα λειτουργησει μια φορα μετα το render

  return (
    <Canvas
      // Canvas: wrapper of 3d rendering context
      frameloop="demand"
      shadows
      camera={{position: [20, 35], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Το Suspense χρησιμοποιειται οταν κανουμε refresh το page μεχρι να φορτωσουν τα δεδομενα απο τον αλλο κωδικα, θα εμφανιζεται το CanvasLoader */}

        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
        {/* isMobile αλλαζει σε true/false αναλογα το width της οθονης */}
      </Suspense>

      {/* ειναι χρησιμο για την φορτωση των 3d αντικειμενων που μπορει να χρειαστουν παραπανω ωρα να φορτωσουν */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
