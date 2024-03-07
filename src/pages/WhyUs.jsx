import React, { useEffect } from "react";
import FooterContact from "../Components/FooterContact";
import WhyUss from "../Components/WhyUs";
import HeroAds from "../Components/HeroAds";
import whyB from "../Images/whych.png";
import whB from "../Images/qu.jpg";
import PriceOffer from "../Components/PriceOffer";
const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bStyle = {
    backgroundImage: `url(${whB})`,
  };
  return (
    <>
      <HeroAds />
      <div className="h-20"></div>
      <div className="  bg-cover bg-center h-[30vh]  " style={bStyle}>
        <h1 className="bg-whiteC bg-opacity-60 font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20 pt-28  w-full h-full  ">
          WHY CHOOSE{" "}
          <span className="shadow-inner border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
            {" "}
            US?
          </span>
        </h1>
      </div>
      <div className="bg-whiteC mt-8 rounded-3xl tsgf iix:mx-4 ixr:mx-4 m:mx-28 l:mx-32 sl:mx-48 ">
        <div className="overflow-x-auto rounded-3xl">
          <table className="w-full border border-collapse">
            {/* head */}
            <thead>
              <tr>
                <th className="border p-2"></th>
                <th className="border p-2 service-header l:text-[20px] sl:text-[22px] ">
                  Other Agencies
                </th>
                <th className="p-2 service-header l:text-[20px] sl:text-[22px]  bg-brightC">
                  Soft Sites
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Monthly Subscription */}
              <tr>
                <th className="p-2 l:text-[20px] sl:text-[22px]  border font-medium text-left">
                  Monthly Subscription
                </th>
                <td className="border p-2">Yes</td>
                <td className="p-2 font-medium bg-brightC bg-opacity-10">No</td>
              </tr>
              {/* Free Support */}
              <tr>
                <th className="font-medium border l:text-[20px] sl:text-[22px]  text-left p-2">
                  Free Support
                </th>
                <td className="border p-2">No</td>
                <td className="border p-2 font-medium bg-brightC bg-opacity-10">
                  Yes
                </td>
              </tr>
              {/* Two Weeks Turnaround Time */}
              <tr>
                <th className="font-medium   l:text-[20px] sl:text-[22px] border text-left p-2">
                  2 Weeks Turnaround Time
                </th>
                <td className="border p-2">Yes</td>
                <td className="border p-2 font-medium bg-brightC bg-opacity-10">
                  Yes
                </td>
              </tr>
              {/* Free 1-Year Domain Hosting */}
              <tr>
                <th className="font-medium  l:text-[20px] sl:text-[22px]  border text-left p-2">
                  Free 1-Year Domain Hosting
                </th>
                <td className="border p-2">No</td>
                <td className="border p-2 font-medium bg-brightC bg-opacity-10">
                  Yes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-40">
        <PriceOffer />
      </div>
      <div className="mt-[-9rem] mb-40">
        <WhyUss />
      </div>
      <FooterContact />
    </>
  );
};

export default WhyUs;
