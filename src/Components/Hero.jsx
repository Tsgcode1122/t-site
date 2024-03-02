import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import heroB from "../Images/hero1.jpg";
import svg from "../Images/ab.png";
import "../ts.css";
import { motion } from "framer-motion";
const Hero = () => {
  const bStyle = {
    backgroundImage: `url(${heroB})`,
  };

  return (
    <>
      <div
        className="m-0 bg-cover bg-center justify-center text-center  bg-no-repeat w-screen h-full iix:pt-28 ixr:pt-36  ixi:pt-40 iix:pb-14 ixr:pb-16  "
        style={bStyle}
      >
        <div className="iix:px-6 ixr:px-8 ">
          <h1 className="iix:text-[40px] ixr:text-[46px] ixi:text-[48px] leading-none  font-tsgf  text-blackC font-bold  ">
            Create Website for Your Brand
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="iix:px-4 iix:py-6 ixr:py-8 ixr:px-6 "
        >
          <p className="text-greyC ixx:text-[20px]">
            Experience an affordable one-time payment, quality websites with
            two-week delivery, and complimentary worry-free maintenance support.
          </p>
        </motion.div>
        <div className="iix:pb-6 ixr:mb-6">
          <motion.button
            className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block text-whiteC iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3 "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get Started Today!!!
          </motion.button>
          <p className="text-greyC">Take the leap with confidence</p>
        </div>
        <motion.div
          className="iix:px-6 ixr:px-8"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src={svg} alt="Your Icon" className=" px-4" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
