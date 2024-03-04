import React, { useEffect, useRef } from "react";
import travel from "../scroll/travel.jpg";
import triumph from "../scroll/triumph.png";
import pro from "../scroll/12pro.png";
import pro2 from "../scroll/a.png";
import aura from "../scroll/aura.png";
import aura2 from "../scroll/abb.png";
import { motion } from "framer-motion";
const ScrollImage = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start smooth scroll when container is visible
          scrollAnimation(entry.target);
        }
      });
    };

    const observer1 = new IntersectionObserver(observerCallback, options);
    observer1.observe(containerRef1.current);

    const observer2 = new IntersectionObserver(observerCallback, options);
    observer2.observe(containerRef2.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const scrollAnimation = (container) => {
    const start = container.scrollTop;
    const end = container.scrollHeight - container.clientHeight;
    const duration = 15000; // Adjust the duration as needed (in milliseconds)
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      container.scrollTop = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        // After reaching the end, initiate scrolling back to the initial position
        setTimeout(() => {
          scrollBackToStart(container);
        }, 1000); // Add a delay before scrolling back (adjust as needed)
      }
    };

    requestAnimationFrame(scroll);
  };

  const scrollBackToStart = (container) => {
    const start = container.scrollTop;
    const end = 0; // Initial position
    const duration = 15000; // Adjust the duration as needed (in milliseconds)
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      container.scrollTop = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        // After reaching the initial position, initiate scrolling down again
        setTimeout(() => {
          scrollAnimation(container);
        }, 1000); // Add a delay before scrolling down again (adjust as needed)
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div className="bg-whiteC items-center justify-center pt-16 br box-shadw iix:px-2 ixr:px-3 pb-40 m:px-16 sl:px-28 ">
      <h3 className="tsgb font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
        Eye-Catching Designs
        <span className="shadow-inner border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
          in an Instant
        </span>{" "}
      </h3>
      <p className="tsgf text-greyC pt-4 px-3 text-center">
        {" "}
        Wait and View the Glance Scroll
      </p>

      <div className="l:grid l:grid-cols-2 justify-center">
        <div
          ref={containerRef1}
          className="bg-whiteC ixr:mx-8 overflow-hidden mt-8 rounded-2xl box-shad iix:h-[20rem] iix:mx-4  ixr:h-[27rem] l:h-[75vh] sl:h-[80vh]"
        >
          <img src={travel} alt="Travel" className="" />
        </div>
        <div className="bg-whiteC ixr:mx-8  mt-8 rounded-2xl box-shad  iix:mx-4 iix:px-8 ixr:px-10  iix:pt-8 ixr:pt-10 s:px-28 s:pt-14 m:px-48 l:px-10  l:h-[75vh] sl:h-[80vh] l:overflow-hidden l:pt-10 sl:px-16">
          <img src={pro} alt="Pro" className="l:hidden" />
          <img src={pro2} alt="Pro2" className="hidden l:block" />
        </div>
      </div>

      <div className="l:grid l:grid-cols-2">
        {/* Second container */}
        <div
          ref={containerRef2}
          className="bg-whiteC ixr:mx-8 overflow-hidden mt-8 rounded-2xl box-shad iix:h-[20rem] iix:mx-4 sl:h-[80vh] ixr:h-[27rem] l:h-[75vh] l:order-2 "
        >
          <img src={triumph} alt="Triumph" className="" />
        </div>
        <div className="bg-whiteC ixr:mx-8  mt-8 rounded-2xl box-shad  iix:mx-4 iix:px-8 ixr:px-10  iix:pt-8 ixr:pt-10 s:px-28 s:pt-14 m:px-48 l:px-10 l:order-1 sl:h-[80vh] l:h-[75vh] l:overflow-hidden l:pt-10 sl:px-16 ">
          <img src={aura} className="l:hidden" />
          <img src={aura2} className="hidden l:block" />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center iix:mt-6 ixr:mt-8">
        <motion.button
          className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block text-whiteC iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3 tsgf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Explore our Portfolio
        </motion.button>
      </div>
    </div>
  );
};

export default ScrollImage;
