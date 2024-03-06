import React from "react";
import Hero from "../Components/Hero";
import HeroAds from "../Components/HeroAds";
import WhyUs from "../Components/WhyUs";
import ScrollImage from "../Components/ScrollImage";
import MiniContact from "../Components/MiniContact";
import PriceOffer from "../Components/PriceOffer";
import Reviewss from "../Components/Reviewss";
import OneTIme from "../Components/OneTIme";
import Faqs from "../Components/Faqs";
import FooterContact from "../Components/FooterContact";

const Home = () => {
  return (
    <>
      <HeroAds />
      <Hero />
      <WhyUs />
      <ScrollImage />

      <PriceOffer />
      <MiniContact />
      <OneTIme />
      <Reviewss />
      <Faqs />
      <FooterContact />
    </>
  );
};

export default Home;
