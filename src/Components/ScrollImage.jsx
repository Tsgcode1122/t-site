import React, { useEffect, useRef } from "react";
import travel from "../scroll/travel.jpg";
import triumph from "../scroll/triumph.png";
import pro from "../scroll/12pro.png";

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
    <div className="bg-whiteC pt-16 br box-shadw iix:px-2 ixr:px-3 pb-16">
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

      {/* First container */}
      <div
        ref={containerRef1}
        className="bg-whiteC ixr:mx-8 overflow-hidden mt-8 rounded-2xl box-shad iix:h-[20rem] iix:mx-4  ixr:h-[27rem]"
      >
        <img src={travel} alt="Travel" className="" />
      </div>

      {/* Second container */}
      <div
        ref={containerRef2}
        className="bg-whiteC ixr:mx-8 overflow-hidden mt-8 rounded-2xl box-shad iix:h-[20rem] iix:mx-4  ixr:h-[27rem]"
      >
        <img src={triumph} alt="Triumph" className="" />
      </div>
    </div>
  );
};

export default ScrollImage;
