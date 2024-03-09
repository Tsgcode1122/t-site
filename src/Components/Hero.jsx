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
        className=" bg-cover bg-center justify-center items-center text-center  bg-no-repeat w-screen h-full iix:pt-28 ixr:pt-36  ixi:pt-40 iix:pb-24 ixr:pb-28 box-shad s:pt-44 m:pb-72 sl:pt-52"
        style={bStyle}
      >
        <div className="iix:px-6 ixr:px-8 ixx:px-12 m:px-28  l:px-48 sl:px-72 ">
          <h1 className="iix:text-[38px] ixr:text-[42px] ixi:text-[44px] l:text-[65px]  leading-tight  tsgb   text-blackC font-bold m:text-[60px] sl:text-[72px]">
            Create <span className=" shadow-inner ">Website</span> for Your
            Business
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="iix:px-4 iix:py-6 ixr:py-8 ixr:px-6 m:px-20 l:px-48 sl:px-80 "
        >
          <p className="text-greyC tsgf ixx:text-[20px] ">
            Experience an affordable one-time payment, quality websites with
            two-week delivery, and complimentary worry-free maintenance support.
          </p>
        </motion.div>
        <div className="iix:pb-6 ixr:mb-6">
          <Link to="/Contact">
            <motion.button
              className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block text-brightC  iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3  tsgf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get Started Today!!!
            </motion.button>
          </Link>
          <p className="text-greyC tsgf">Take the leap with confidence</p>
        </div>
      </div>
      <motion.div
        className="iix:px-6 ixr:px-8 flex items-center justify-center iix:mt-[-5rem] ixr:mt-[-6rem] m:mt-[-14rem]  m:px-32 l:px-40 sl:px-72 "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <img
          src={svg}
          alt="Your Icon"
          className="iix:p-4 ixr:p-5 bg-lightC box-shadd"
        />
      </motion.div>
    </>
  );
};

export default Hero;
