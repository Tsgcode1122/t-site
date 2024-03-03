import React from "react";
import Hero from "../Components/Hero";
import HeroAds from "../Components/HeroAds";
import WhyUs from "../Components/WhyUs";
import ScrollImage from "../Components/ScrollImage";

const Home = () => {
  return (
    <>
      <HeroAds />
      <Hero />
      <WhyUs />
      <ScrollImage />
    </>
  );
};

export default Home;
