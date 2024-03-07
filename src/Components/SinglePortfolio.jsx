import React, { useEffect } from "react";
import { portfolioData } from "./PortfolioData";
import { useParams } from "react-router-dom";
import HeroAds from "./HeroAds";
import FooterContact from "./FooterContact";

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

  const review = portfolio?.review; // Ensure that review is defined

  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return (
    <>
      <HeroAds />
      <div className="h-28"></div>
      <div className="flex flex-col mt-8 text-center">
        <p className="text-[35px]">
          {" "}
          Web Design for <span className="text-brightC"> {portfolio.name}</span>
        </p>
        <p> {portfolio.description}</p>
      </div>
      <img
        src={portfolio.imageResponsive}
        alt={`${portfolio.name} Responsive`}
        className="p-4"
      />
      <img src={portfolio.image} alt={`${portfolio.name}`} />
      <div className="mt-8 px-4">
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
      <div className=" mt-56">
        <FooterContact />
      </div>
    </>
  );
};

export default SinglePortfolio;
