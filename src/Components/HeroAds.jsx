import React, { useState, useEffect } from "react";

const HeroAds = () => {
  const [backgroundColor, setBackgroundColor] = useState("bg-brightC");
  const [textColor, setTextColor] = useState("text-whiteC");
  useEffect(() => {
    // Change background and text color after 1 minute
    const timer = setTimeout(() => {
      setBackgroundColor("bg-whiteC");
      setTextColor("text-brightC");
    }, 60000); // 1 minute in milliseconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className={`${backgroundColor} fixed w-full z-30 iix:px-2 ixr:px-2 iix:py-4 iix:justify-center ixr:py-5 ixx:pb-9 xl:pb-12 bg-cover bg-center`}
      >
        <p className={`${textColor} iix:text-[12px] text-center md:text-xl`}>
          HURRY UP!!! | Get your website as low as{" "}
          <span className="font-bold">$250</span>
        </p>
      </div>
    </>
  );
};

export default HeroAds;
