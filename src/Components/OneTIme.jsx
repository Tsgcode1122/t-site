import React from "react";
import { motion } from "framer-motion";
import budget from "../Images/budgeting.png";
import support from "../Images/support.png";
import friendly from "../Images/friendly.png";
const OneTIme = () => {
  const cards = [
    {
      id: 1,
      title: "Business Website",
      image: budget,
      content: " $250",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      image: friendly,
      content: "$700",
    },
    {
      id: 3,
      title: "Booking Website",
      image: support,
      content: "$400",
    },
  ];

  return (
    <>
      <div className="pt-16 pb-16 justify-center items-center text-center bg-lightC iix:px-4 ixr:px-5 ixx:px-6 s:px-12 m:px-24 l:pt-32 sl:px-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 10 }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="tsgb  font-semibold iix:text-[25px] text-center ixr:text-[30px] s:text-[40px] s:leading-normal leading-8 l:text-[40px] l:px-20">
            Unlock with a{" "}
            <span className=" shadow-inner text-brightC p-1 iix:p-2   ">
              One-Time Payment
            </span>{" "}
            <span className="ml-2 line-through text-blackC">
              No Monthly Payment
            </span>
          </h3>
        </motion.div>
        <motion.div
          className="justify-center items-center s:grid s:grid-cols-2 m:grid-cols-3 l:gap:10"
          style={{ gap: "2rem" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="box-shadw mt-28 items-center p-8 rounded-xl  border-design "
              initial={{
                y: 30,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.6,
                  delay: 0.1,
                  duration: 3,
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex flex-col mt-[-6rem] glass box-shad rounded-3xl items-center p-3 ">
                <h3 className="mt-2 font-bold iix:text-[18px] ixr:text-[20px] font-tsg ">
                  {card.title}
                </h3>
                <p className="text-center tsgf  text-blackC iix:text-[40px] ixr:text-[50px]   ">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default OneTIme;
