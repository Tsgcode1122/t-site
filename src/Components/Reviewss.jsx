import React from "react";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import "../ts.css";
import { motion } from "framer-motion";
const reviews = [
  {
    id: 1,
    name: "Olivia Mitchell",
    rating: 5,
    date: "November 20, 2023",
    content:
      "The website design created by the team exceeded my expectations! They captured my vision perfectly, and the user interface is intuitive. Highly impressed with their skills and creativity.",
  },
  {
    id: 2,
    name: "Benjamin Foster",
    rating: 4,
    date: "January 8, 2024",
    content:
      "Engaged them for my website redesign project. The design team demonstrated proficiency, and their attention to detail resulted in an aesthetically pleasing and functional website.",
  },
  {
    id: 3,
    name: "Sophie Turner",
    rating: 5,
    date: "February 15, 2023",
    content:
      "Exceptional website design service! The team's dedication to quality shines through. Highly recommended for professional and creative web solutions.",
  },
  {
    id: 4,
    name: "Nathan Hayes",
    rating: 4,
    date: "March 3, 2023",
    content:
      "Impressed with the website design! They delivered a sleek and modern design that perfectly aligns with my brand. Great collaboration and timely delivery.",
  },
];

const Reviewss = () => {
  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <div className=" mx-8 mt-8 ixx:mt-16 md:mx-10 lg:mx-16 xl:mx-36  ">
        <h3 className="tsgb font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
          Testimonials From Amazing{" "}
          <span className="shadow-inner border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
            Business Owners
          </span>{" "}
          Similar to You
        </h3>
        <div className="s:grid s:grid-cols-2 l:grid-cols-2 gap-4 mt-8 ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-lightC box-shad rounded-md p-4 mb-4 box-shad "
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blueC text-blackC rounded-full flex items-center justify-center font-semibold mr-2 box-shad font-tsg">
                    {getInitials(review.name)}
                  </div>
                  <div className="text-lg font-semibold tsgb">
                    {review.name}
                  </div>
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
          ))}
        </div>
      </div>
      <div className="flex justify-center  items-center bg-lightC mt-[-10px]  p-4 tsgf ">
        {/* <Link to="/Reviews">
          <button className="bg-redC text-blackC shadow-lightC border-solid border-lightC rounded-md p-2 box-shad mr-3">
            More Reviews
          </button>
        </Link> */}
        <motion.button
          className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block  iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3 tsgf border-design text-brightC l:mb-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Contact Now!!!
        </motion.button>
      </div>
    </>
  );
};

export default Reviewss;
