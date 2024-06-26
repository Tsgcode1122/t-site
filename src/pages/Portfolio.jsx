import { portfolioData } from "../Components/PortfolioData";
import HeroAds from "../Components/HeroAds";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FooterContact from "../Components/FooterContact";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [hoveredProject, setHoveredProject] = useState(null);
  return (
    <>
      <HeroAds />
      <div className="h-20"></div>
      <div className="mt-16 l:mt-28">
        <h3 className="tsgb font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px]  l:px-20 ">
          View our
          <span className="shadow-inner border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
            Work
          </span>{" "}
        </h3>
        <p className="text-center mt-4 text-greyC l:text-[21px]">
          Tap to View{" "}
        </p>
      </div>
      <div className="mt-16 flex flex-col m:grid m:grid-cols-2 gap-8 l:mx-16 mx-8 sl:mx-36 ">
        {portfolioData.map((portfolio, index) => (
          <motion.div
            key={index}
            className="relative h-[20rem] overflow-hidden m:mb-8 rounded-3xl shadow-2xl hover:scale-[1.02]"
            // whileHover={{ scale: 1.02 }}
            // whileTap={{ scale: 1.02 }}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
            onClick={() => setHoveredProject(index)}
            onTapEnd={() => setHoveredProject(null)}
            onPan={() => setShowDetails(true)}
          >
            <motion.img
              src={portfolio.image}
              alt={portfolio.name}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            {hoveredProject === index && (
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-blackC bg-opacity-70 text-whiteC"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-lg">{portfolio.description}</p>
                <Link key={index} to={`/Portfolio/${portfolio.id}`}>
                  <motion.button
                    className="mt-2 border bg-brightC rounded-2xl border-whiteC p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    View This Project
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <div className=" mt-56">
        <FooterContact />
      </div>
    </>
  );
};

export default Portfolio;
