import React, { useState, useEffect } from "react";
import "../ts.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import logo from "../Images/logo1.png";
import logo2 from "../Images/logo1.png";
import { CiMail } from "react-icons/ci";
import {
  IoIosArrowDropdown,
  IoMdArrowDropright,
  IoMdTime,
} from "react-icons/io";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="md:hidden fixed w-full iix:p-3 ixr:p-3 ixi:p-4 ixx:px-6 ixx:py-2 z-50 top-8 iix:top-6"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-lightC flex justify-between items-center rounded-xl  w-full iix:py-1 iix:px-4 ixr:px-2 ixi:px-5  ixr:mt-[-12px] s:mt-[-4px] ixi:mt-[-14px] iix:mb-1 ixr:py-2 ixr:mb-2 s:py-2 ixi:py-2 ixi:mb-2 ixx:py-2 ixx:mb-3  ixx:px-5 box-shad"
        >
          <p>Menu</p>

          <img
            src={logo}
            className="max-w-full h-4 m-0 p-0 justify-center  "
            alt="Logo"
          />

          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>

        <motion.ul
          className="list-none rounded-2xl box-shad bg-lightC"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants} className="p-4 ">
            <Link
              to="/"
              className="flex justify-between  border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC text-redC"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home <IoMdArrowDropright style={{ fontSize: "20px" }} />
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="p-4 ">
            <Link
              to="/WhyUs"
              className="flex justify-between  border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC text-redC"
              onClick={() => setIsOpen(!isOpen)}
            >
              Why Us
              <IoMdArrowDropright style={{ fontSize: "20px" }} />
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="p-4 ">
            <Link
              to="/Portfolio"
              className="flex justify-between  border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC text-redC"
              onClick={() => setIsOpen(!isOpen)}
            >
              Portfolio
              <IoMdArrowDropright style={{ fontSize: "20px" }} />
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="p-4 ">
            <Link
              to="/Contact"
              className="flex justify-between  border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC text-redC"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
              <IoMdArrowDropright style={{ fontSize: "20px" }} />
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="p-4 ">
            <Link
              to="/Blogs"
              className="flex justify-between  border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.02] hover:bg-lightC hover:border-blueC text-redC"
              onClick={() => setIsOpen(!isOpen)}
            >
              Blogs
              <IoMdArrowDropright style={{ fontSize: "20px" }} />
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>

      <div className="hidden fixed w-full   text-darkC  m:flex m:px-6 m:py-5 navbar z-50 l:px-12 sl:px-32  m:top-4  l:top-5">
        <div className="bg-lightC w-full rounded-xl box-shad flex  justify-between items-center m:px-4 m:py-1 l:py-2 sl:py-2">
          <ul className="menu menu-horizontal md:text-[16px]  lg:text-[18px] xl:text-xl ">
            <li className="m:px-2 l:px-3 sl:px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="m:px-2 l:px-3 sl:px-4">
              <Link to="/WhyUs">Why Us</Link>
            </li>
            <li className="m:px-2 l:px-3 sl:px-4">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} className="max-w-full h-6 " alt="Logo" />
          </Link>
          <ul className="menu menu-horizontal  md:text-[16px]  lg:text-[18px] sl:text-xl ">
            <li className="m:px-2 l:px-3 sl:px-4">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="m:px-2 l:px-3 xl:px-4">
              <Link to="/Blogs">Blogs</Link>
            </li>

            <li className="m:px-2 l:px-3 sl:px-4">
              <Link to="/Contact">Chat With Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
