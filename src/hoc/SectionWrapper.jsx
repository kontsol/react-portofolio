import React from "react";
import {motion, stagger} from "framer-motion";
import {styles} from "../styles";
import {staggerContainer} from "../utils/motion";

// Το component ειναι που βαζει τα αντικειμενα στο κεντρο
// idName ειναι για να κανει scroll στο idName
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        //
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        // Στο refresh οι καρτες εμφανιζονται μια μια
        //
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
