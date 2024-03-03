import React, { useEffect } from "react";
import travel from "../scroll/travel.jpg";
import { motion, useAnimation } from "framer-motion";

const ScrollImage = () => {
  const translateYVariants = {
    initial: { translateY: 0 },
    animate: {
      translateY: "-100%", // Move image up to reveal more content
      transition: {
        duration: 50,
        ease: "linear",
        repeat: Infinity,
        delay: 0.2,
        repeatDelay: 1,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <>
      <div className="bg-whiteC pt-16 br box-shadw iix:px-2 ixr:px-3 pb-16">
        <h3 className="tsgb font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
          Eye-Catching Designs
          <span className="shadow-inner border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
            in an Instant
          </span>{" "}
        </h3>
        <p className="tsgf pt-4 px-3 text-center"></p>
        <motion.div className="bg-whiteC mx-4 rounded-2xl box-shad iix:px-4 h-[28rem] iix:overflow-hidden ixr:h-[27rem] ixr:overflow-hidden ">
          <motion.img
            src={travel}
            variants={translateYVariants}
            initial="initial"
            animate={controls}
            viewport={{ once: true, amount: 0.9 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default ScrollImage;
