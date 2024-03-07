import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../Images/left-arrow.png";
const Faqs = () => {
  return (
    <>
      <div className="br shadow-2xl bg-whiteC  mt-6 s:pt-12 iix:pt-4 ixr:pt-6 ixx:pt-8 pb-48">
        <h3 className="tsgb  font-semibold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20 ">
          Frequently Asked
          <span className=" shadow-inner border-b-2 border-b-brightC p-1 iix:p-2 rounded-md bg-lightC ">
            Questions
          </span>{" "}
        </h3>
        <div
          className="mx-8  iix:mx-0 ixr:mx-0 p-4  flex flex-col s:px-20 m:grid m:grid-cols-2 m:px-10
      gap-6 l:px-14 sl:px-36"
        >
          <div className=" ixx:p-4 iix:p-4 ixr:p-4 shadow-inner rounded-3xl flex items-center">
            <motion.img
              src={arrow}
              className="ixx:h-16 iix:h-12 ixr:h-14 "
              initial={{ opacity: 0, x: 10, rotate: 5 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: [0, 5, 0], // Adding an array for oscillation
              }}
              transition={{ duration: 2, ease: "linear", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <div>
              <div className=" ml-[-3rem] tsgf font-medium iix:ml-[-2rem] ixr:ml-[-2rem] text-justify">
                Is there a one-time payment for website development?
              </div>

              <p className="tsgf text-greyC text-justify">
                Yes, we offer a one-time payment option for website development
                services.
              </p>
            </div>
          </div>
          <div className=" p-4 shadow-inner rounded-3xl flex items-center">
            <motion.img
              src={arrow}
              className="ixx:h-16 iix:h-12 ixr:h-14 "
              initial={{ opacity: 0, x: 10, rotate: 5 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: [0, 5, 0], // Adding an array for oscillation
              }}
              transition={{ duration: 2, ease: "linear", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <div>
              <div className=" ml-[-3rem] tsgf font-medium iix:ml-[-2rem] ixr:ml-[-2rem] text-justify">
                What happens if I don't have any content for my website?
              </div>

              <p className="text-greyC tsgf">
                No worries! We can work with you to create compelling content
                that aligns with your website goals and audience.
              </p>
            </div>
          </div>
          <div className=" p-4 shadow-inner rounded-3xl flex items-center">
            <motion.img
              src={arrow}
              className="ixx:h-16 iix:h-12 ixr:h-14 "
              initial={{ opacity: 0, x: 10, rotate: 5 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: [0, 5, 0], // Adding an array for oscillation
              }}
              transition={{ duration: 2, ease: "linear", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <div>
              <div className=" ml-[-3rem] tsgf font-medium iix:ml-[-2rem] ixr:ml-[-2rem] text-justify">
                Will I own the website once it's developed?
              </div>

              <p className="tsgf text-greyC text-justify">
                Absolutely! Upon completion and payment, the website becomes
                your property.
              </p>
            </div>
          </div>
          <div className=" p-4 shadow-inner rounded-3xl flex items-center">
            <motion.img
              src={arrow}
              className="ixx:h-16 iix:h-12 ixr:h-14 "
              initial={{ opacity: 0, x: 10, rotate: 5 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: [0, 5, 0], // Adding an array for oscillation
              }}
              transition={{ duration: 2, ease: "linear", delay: 0.4 }}
              viewport={{ once: true }}
            />
            <div>
              <div className=" ml-[-3rem] tsgf font-medium iix:ml-[-2rem] ixr:ml-[-2rem] text-justify">
                How does hosting work if I have my own domain registered?
              </div>

              <p className="tsgf text-greyC text-justify">
                We offer the flexibility for you to bring your personal domain.
                Additionally, if you choose our hosting services, you get 1 year
                of free hosting from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
