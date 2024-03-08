import React, { useState, useEffect } from "react";

const HeroAds = () => {
  const [backgroundColor, setBackgroundColor] = useState("bg-brightC");
  const [textColor, setTextColor] = useState("text-whiteC");
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundColor("bg-whiteC");
      setTextColor("text-brightC");
    }, 60000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className={`${backgroundColor} fixed w-full z-30 iix:px-2 ixr:px-2 iix:py-4 iix:justify-center ixr:py-2 ixr:pb-4 ixi:pb-4 s:pb-6 ixx:pb-4 sl:pb-6 bg-cover bg-center`}
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
