import React, { useEffect } from "react";
import { portfolioData } from "./PortfolioData";
import { useParams } from "react-router-dom";
import HeroAds from "./HeroAds";

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
      <p> Web Design for {portfolio.name}</p>
      <p> {portfolio.description}</p>

      <img src={portfolio.image} alt={`${portfolio.name}`} />
      <img
        src={portfolio.imageResponsive}
        alt={`${portfolio.name} Responsive`}
      />
      {review && (
        <div>
          <div
            key={review.id}
            className="bg-lightC box-shad rounded-md p-4 mb-4 box-shad "
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blueC text-blackC rounded-full flex items-center justify-center font-semibold mr-2 box-shad font-tsg">
                  {getInitials(review.name)}
                </div>
                <div className="text-lg font-semibold tsgb">{review.name}</div>
              </div>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, index) => (
                  <div key={index} className="text-yellow-500 mr-1">
                    ⭐
                  </div>
                ))}
              </div>
            </div>
            <div className="text-gray-500 tsgf mb-2">{review.date}</div>
            <div className="text-darkC tsgf">{review.content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePortfolio;
