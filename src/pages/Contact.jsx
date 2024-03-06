import React from "react";
import whB from "../Images/m.jpg";
import HeroAds from "../Components/HeroAds";
const Contact = () => {
  const bStyle = {
    backgroundImage: `url(${whB})`,
  };
  return (
    <>
      <HeroAds />
      <div className="h-20"></div>
      <div className="  bg-cover bg-center h-[30vh]  " style={bStyle}>
        <h1 className="bg-blackC bg-opacity-90 font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20 pt-28  w-full h-full  ">
          WHY CHOOSE{" "}
          <span className="shadow-inner border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
            {" "}
            US?
          </span>
        </h1>
      </div>
    </>
  );
};

export default Contact;
