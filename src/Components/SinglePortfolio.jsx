import React, { useEffect, useRef } from "react";
import { portfolioData } from "./PortfolioData";
import { useParams } from "react-router-dom";
import HeroAds from "./HeroAds";
import FooterContact from "./FooterContact";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import ui from "../Images/ui.png";
import "../ts.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
const SinglePortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { portfolioId } = useParams();
  console.log("Portfolio ID from URL:", portfolioId);

  const portfolio = portfolioData.find(
    (portfolio) => portfolio.id === portfolioId,
  );
  console.log("Portfolio found:", portfolio);

  const review = portfolio?.review;
  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  const containerRef1 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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

    return () => {
      observer1.disconnect();
    };
  }, []);

  const scrollAnimation = (container) => {
    const start = container.scrollTop;
    const end = container.scrollHeight - container.clientHeight;
    const duration = 15000;
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      container.scrollTop = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        setTimeout(() => {
          scrollBackToStart(container);
        }, 1000);
      }
    };

    requestAnimationFrame(scroll);
  };

  const scrollBackToStart = (container) => {
    const start = container.scrollTop;
    const end = 0;
    const duration = 15000;
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      container.scrollTop = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        setTimeout(() => {
          scrollAnimation(container);
        }, 1000);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <>
      <HeroAds />
      <div className="h-28"></div>

      <div className="flex items-center justify-center mt-6 m:mt-12 ">
        {" "}
        <Link
          to="/Portfolio"
          className="flex justify-between  border shadow-inner border-lightC rounded-md transition-all duration-300 hover:scale-[1.04] s:text-[20px] "
        >
          Portfolio
        </Link>{" "}
        / {portfolio.name}
      </div>
      <div className="flex flex-col mt-4 text-center">
        <p className="s:text-[35px] iix:text-[25px] ixr:text-[25px] ixx:text-[30px]">
          {" "}
          Web Design for <span className="text-brightC"> {portfolio.name}</span>
        </p>
        <p> {portfolio.description}</p>
      </div>
      <div className="sl:grid sl:grid-cols-2 sl:mx-36 sl:items-center sl:gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-6  flex gap-8">
            <span className=" shadow-2xl rounded-xl p-4 iix:p-2 ixr:text-[15px] flex iix:text-[15px] items-center s:text-[20px]">
              Responsiveness
              <FaArrowDownLong className="text-brightC animate-bounce " />
            </span>
          </div>
          <img
            src={portfolio.imageResponsive}
            alt={`${portfolio.name} Responsive`}
            className="p-4 s:px-8 m:px-28 l:px-48 sl:px-2"
          />
          <div className="mt-8 px-4 ixx:px-8 ixx:hidden ixi:hidden ixr:hidden iix:hidden md:hidden  sl:flex">
            <div className="bg-lightC box-shad rounded-md p-4 mb-4 box-shad ">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blueC text-blackC rounded-full flex items-center justify-center font-semibold mr-2 box-shad font-tsg">
                    {getInitials(portfolio.review.name)}
                  </div>
                  <div className="text-lg font-semibold tsgb">
                    {portfolio.review.name}
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(portfolio.review.rating)].map((_, index) => (
                    <div key={index} className="text-yellow-500 mr-1">
                      ⭐
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-gray-500 tsgf mb-2">
                {portfolio.review.date}
              </div>
              <div className="text-darkC tsgf">{portfolio.review.content}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center my-4">
            <div className="text-center flex gap-8">
              <span className=" shadow-2xl rounded-xl p-4 iix:p-2 ixr:text-[15px] flex iix:text-[15px] items-center s:text-[20px]">
                Quick Glance View
                <FaArrowDownLong className="text-brightC animate-bounce " />
              </span>
              {portfolio.live ? (
                <a
                  href={portfolio.live}
                  className="shadow-2xl rounded-xl p-4 iix:p-2 iix:text-[15px] ixr:text-[15px] flex items-center s:text-[20px]"
                >
                  Live View <MdArrowOutward className="text-brightC" />
                </a>
              ) : null}
            </div>
          </div>
          <div className="mb-8">
            <div
              ref={containerRef1}
              className="bg-whiteC ixr:mx-8 overflow-hidden mt-8 rounded-2xl box-shad iix:h-[20rem] iix:mx-4  ixr:h-[27rem] l:h-[35rem] l:mx-36 s:h-[35rem] s:mx-20 m:mx-28 sl:mx-2"
            >
              <img src={portfolio.image} alt="Travel" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 ixx:px-8 s:px-16 m:px-24 l:px-32 sl:hidden">
        <div className="bg-lightC box-shad rounded-md p-4 mb-4 box-shad ">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blueC text-blackC rounded-full flex items-center justify-center font-semibold mr-2 box-shad font-tsg">
                {getInitials(portfolio.review.name)}
              </div>
              <div className="text-lg font-semibold tsgb">
                {portfolio.review.name}
              </div>
            </div>
            <div className="flex items-center">
              {[...Array(portfolio.review.rating)].map((_, index) => (
                <div key={index} className="text-yellow-500 mr-1">
                  ⭐
                </div>
              ))}
            </div>
          </div>
          <div className="text-gray-500 tsgf mb-2">{portfolio.review.date}</div>
          <div className="text-darkC tsgf">{portfolio.review.content}</div>
        </div>
      </div>

      {/* <img src={portfolio.image} alt={`${portfolio.name}`} /> */}

      <div className=" mt-56">
        <FooterContact />
      </div>
    </>
  );
};

export default SinglePortfolio;
