import React from "react";
import {Html, useProgress} from "@react-three/drei";

const Loader = () => {
  const {progress} = useProgress();

  return (
    // εμφανιζει ενα Loading με ποσοστο που οταν ειναι 100 θα εμφανιζει το 3d αντικειμενο
    // γιατι μπορει να αργησει να εμφανιστει
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{fontSize: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 40}}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
