import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import ui from "../Images/ui.png";
import "../ts.css";
import { Link } from "react-router-dom";

// import minicontact from "../Images/minicontact";
const MiniContact = () => {
  return (
    <>
      <div className="mt-8 items-center justify-center  iix:px-2 ixr:px-3  m:px-16 sl:px-28 l:grid l:grid-cols-2 l:bg-whiteC l:items-center l:shadow-2xl  l:rounded-3xl l:mt-[-8rem] l:mx-14 l:pt-8 sl:mx-32">
        <div className="bg-lightC ixx:mx-16  ixx:mt-[-10rem] mb-6  rounded-3xl iix:mx-6 iix:mt-[-7rem] shadow-2xl ixr:mx-12 ixr:mt-[-8rem] l:mx-0 l:mt-0 l:bg-transparent l:shadow-none ">
          <img src={ui} />
        </div>
        <div className=" l:px-8 ">
          <p className=" tsgb font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-0 l:text-lg l:mt-0  ">
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

          <div className=" flex flex-col justify-center items-center iix:mt-6 ixr:mt-10 l:mt-2 ">
            <Link to="/Contact">
              <motion.button
                className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block text-brightC  iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3 tsgf border-design l:mb-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact Now!!!
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniContact;
