import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import whB from "../Images/m.jpg";
import HeroAds from "../Components/HeroAds";
import FooterContact from "../Components/FooterContact";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  const bStyle = {
    backgroundImage: `url(${whB})`,
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xnqkdolz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",

          services: "",
          message: "",
          type: "",
        });

        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
      } else {
        console.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };
  return (
    <>
      <HeroAds />
      <div className="h-20"></div>
      <div className="  bg-cover bg-center h-[30vh] m:h-[35vh] " style={bStyle}>
        <h1 className="bg-blackC bg-opacity-90 font-bold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20 pt-28 iix:pt-14 m:pt-40 w-full h-full text-whiteC  ">
          Contact{" "}
          <span className="shadow-inner text-blackC border-b-2 border-b-brightC p-1 iix:p-1 rounded-md bg-whiteC">
            US
          </span>
        </h1>
      </div>
      <div className="iix:mt-32 ixx:mt-28 ixr:mt-28 s:mt-36">
        <div className="bg-transparent  relative ">
          <form
            onSubmit={handleSubmit}
            className="  m:mt-[-1rem] mt-[-10rem] box-shad rounded-3xl bg-whiteC mx-4 px-8 z-40 py-8 iix:px-4 ixr:px-6 s:mx-8 m:grid m:grid-cols-1 items-center m:py-2 m:gap-8 m:mx-12 l:mx-28 sl:mx-72"
          >
            <div className="m:mt-0">
              <h3 className="tsgf  font-semibold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8  m:text-[40px] m:text-center m:mt-0 l:text-72 sl:text-[45px]">
                Let's Get Started with Your
                <span className=" shadow-inner border-b-2 text-brightC p-1 iix:p-2   ">
                  Website
                </span>{" "}
              </h3>
              <p className="tsgf text-center text-greyC pt-1 m:text-center">
                Have questions? Let's discuss how to kickstart your website!
              </p>
            </div>
            <div className=" mt-4 m:mt-6">
              <div className=" m:grid m:grid-cols-2 m:gap-3">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="t-1 p-2 border bg-whiteC rounded w-full mb-4"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="t-1 p-2 border bg-whiteC rounded w-full mb-4"
                  />
                </div>
              </div>
              <div className=" m:grid m:grid-cols-2 m:gap-2">
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border bg-whiteC rounded w-full mb-4 "
                  />
                </div>
                <div>
                  <input
                    id="message"
                    name="message"
                    placeholder="Business Name"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border bg-whiteC rounded w-full "
                  ></input>
                </div>
              </div>

              <div className="text-center bg-redC rounded-xl text-lightC">
                <motion.button
                  type="submit"
                  className="iix:px-8 iix:py-3 ixx:text-[20px] bg-blackC inline-block text-brightC  iix:mb-2 ixr:mb-2 rounded-md ixr:px-14 ixr:py-3 mt-4 tsgf m:mt-0 m:text-[15px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Let Chat!
                </motion.button>
              </div>
            </div>
          </form>

          {showSuccessMessage && (
            <div className="success-message bg-green-200 text-green-800 p-2 rounded mt-4">
              <p>Thanks for messaging</p>
              <p>We'll respond to you as soon as possible.</p>
            </div>
          )}
        </div>
        <div className="bg-lightC  bg-opacity-10 pt-[24rem] mt-[-21rem]   z-20 ">
          <footer className="px-4 tsgf shadow-2xl items-center  pb-4 bg-whiteC  bg-opacity-30 br iix:px-2 ixr:px-2">
            <div className="flex flex-col gap-4 items-center text-center justify-center m:flex m:flex-row m:px-4 m:items-center m:py-4 m:justify-between l:px-12 sl:px-36">
              <div className="iix:py-4 ixr:py-6 rounded-2xl text-center  m:py-0 m:flex-1">
                <p className="tsgf mb-4 m:p-2 p-4 m:mb-1 ">
                  Boost your business with our premier web design services.
                  Embark on a journey of excellence! Reach out for a customized
                  consultation, and let's turn your vision into a digital
                  masterpiece.
                </p>
                <div className="flex flex-row justify-center gap-2 tsgf">
                  <a href="https://www.instagram.com/soft_sites?igsh=MWF5d21nN3p4bWEzZQ==">
                    <button className=" flex items-center text-justify gap-4 bg-lightC p-2 box-shad rounded-full">
                      <FaInstagram className="" />
                    </button>
                  </a>

                  <a href="mailto:triumphsolar@yahoo.com">
                    <button className=" box-shad p-2 bg-lightC rounded-full flex items-center gap-4">
                      <MdOutlineEmail />
                    </button>
                  </a>
                </div>
              </div>
              <div className="m:flex-1">
                <div className="">
                  <h6 className=" text-center font-medium">Quick Links</h6>
                  <ul className="flex flex-col gap-3 tsgf iix:flex  iix:flex-row ixr:gap-6 iix:gap-6 ixr:flex-row ixr:flex ixi:flex ixi:flex-row items-center justify-center ">
                    <li className="link  link-hover">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="link link-hover">
                      <Link to="/Portfolio">Portfolio</Link>
                    </li>

                    <li className="link link-hover">
                      <Link to="/Whyus">Why Us</Link>
                    </li>
                    <li className="link link-hover">
                      <Link to="/Blog">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className=" my-4 ">
                  <h6 className="text-center font-medium ">Services</h6>
                  <ul className="flex flex-col gap-3 tsgf iix:flex  iix:flex-col  iix:gap-1 ixr:flex-col ixr:flex ixi:flex ixi:flex-row justify-center ">
                    <li className="link link-hover">Landing Page</li>
                    <li className="link link-hover">Booking Website</li>
                    <li className="link link-hover">E-commerce</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <p className="tsgf border-t-whiteC border-2 font-medium">
                ©2024 Ts Sites - Web Design
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Contact;
