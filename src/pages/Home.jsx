import React from "react";
import Hero from "../Components/Hero";
import HeroAds from "../Components/HeroAds";
import WhyUs from "../Components/WhyUs";
import ScrollImage from "../Components/ScrollImage";
import MiniContact from "../Components/MiniContact";

const Home = () => {
  return (
    <>
      <HeroAds />
      <Hero />
      <WhyUs />
      <ScrollImage />
      <MiniContact />
    </>
  );
};

export default Home;
