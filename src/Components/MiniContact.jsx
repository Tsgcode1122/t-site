import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import ui from "../Images/ui.png";
import "../ts.css";
// import minicontact from "../Images/minicontact";
const MiniContact = () => {
  return (
    <>
      <div className="mt-8">
        <div className="bg-lightC mx-16 mt-[-10rem] mb-6 box-shad rounded-3xl">
          <img src={ui} />
        </div>

        <p className=" tsgb font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
          We create exceptional, visually striking websites ,
          <span className=" shadow-inner border-b-2 border-b-brightC p-1 iix:p-2 rounded-md bg-whiteC ">
            let’s create yours now!!
          </span>{" "}
        </p>
        <div className="mt-12 flex items-center justify-center">
          <div className="animate-bounce w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <FaArrowDownLong className="text-brightC" />
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center iix:mt-6 ixr:mt-8">
          <motion.button
            className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block text-whiteC iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3 tsgf border-design"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact Now!!!
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default MiniContact;
