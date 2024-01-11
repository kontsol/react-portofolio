import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* η μπιλιτσα */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          {/* η γραμμη */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Kostas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I developed 3D visuals, user <br className="sm:block hidden" />{" "}
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      {/* Toggle button για να μεταφερεται στο about*/}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[62px] rounded-3xl border-4 border-gray-300 flex justify-center items-start">
            {/* Animate μονο το αξονα Y για το button*/}
            <motion.div
              animate={{
                y: [0, 30, 0], //δημιουργει την κινηση πανω κατω
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-300 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
