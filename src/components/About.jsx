import React from "react";
import {Tilt} from "react-tilt"; //για το animation για τις καρτες

import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      {/* Το Tilt χρησιμοποιειται για να εφαρμοστει animation οταν γινεται hover πανω στο αντικειμενο, χωρις Tilt απλα θα το fadeIn μετα απο refresh page */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} //το 2ο αντικειμενο θα εμφανιστει μετα το πρωτο + 0.5 * index και παει λεγοντας
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options={{max: 45, scale: 1, speed: 450}} //το option ειναι απο το Tilt
          className="bg-[#15081b] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* το κομματι αυτο ξεκιναει απο το πανω y=-50 */}
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        // ξεκιναει αορατο και εμφανιζεται
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        tempora itaque nostrum omnis nulla numquam. Eius modi possimus sequi
        velit, reprehenderit, quasi id ipsa asperiores impedit officia et
        recusandae aperiam?
      </motion.p>

      <div className="mt-20 grid grid-cols-2 gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
