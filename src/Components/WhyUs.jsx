import React from "react";
import { motion } from "framer-motion";
import budget from "../Images/budgeting.png";
import support from "../Images/support.png";
import friendly from "../Images/friendly.png";
const WhyUs = () => {
  const cards = [
    {
      id: 1,
      title: "Budget-Friendly",
      image: budget,
      content:
        " Choose us for budget-friendly web designs that don't compromise quality.",
    },
    {
      id: 2,
      title: "Responsive Design",
      image: friendly,
      content:
        "Crafting responsive designs for seamless user experiences on any device.",
    },
    {
      id: 3,
      title: "Customer Support",
      image: support,
      content:
        "Relax with our top-tier support, ensuring your website's peak performance.",
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
          <h3 className="tsgb  font-semibold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
            Boost your business's{" "}
            <span className=" shadow-inner border-b-2 border-b-brightC p-1 iix:p-2 rounded-md bg-lightC ">
              online presence{" "}
            </span>{" "}
            with Ts Sites
          </h3>
        </motion.div>
        <motion.div
          className="justify-center items-center l:grid l:grid-cols-3 l:gap:10"
          style={{ gap: "2rem" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="box-shadw mt-28 items-center p-8 rounded-xl l:min-h-[12rem] border-design "
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
                <img src={card.image} className="h-16" alt={card.title} />
                <h3 className="mt-2 font-bold iix:text-[18px] ixr:text-[20px] font-tsg ">
                  {card.title}
                </h3>
                <p className="text-center tsgf  text-greyC">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WhyUs;
