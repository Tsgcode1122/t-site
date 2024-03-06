import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
const Cform = () => {
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
      <form
        onSubmit={handleSubmit}
        className="  mt-[-4rem] box-shad  mx-4 px-8 py-8 bg-lightC ixx:mx-16  ixx:mt-[-10rem] mb-6  rounded-3xl iix:mx-6 iix:mt-[-7rem] shadow-2xl ixr:mx-12 ixr:mt-[-8rem] l:mx-0 l:mt-0 l:bg-transparent l:shadow-none"
      >
        <div>
          <h3 className="tsgf  font-semibold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
            Let's Get Started with Your
            <span className=" shadow-inner border-b-2 text-brightC p-1 iix:p-2   ">
              Website
            </span>{" "}
          </h3>
        </div>
        <div className=" mt-4">
          <div className="">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="t-1 p-2 border rounded w-full mb-4"
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
                className="t-1 p-2 border rounded w-full mb-4"
              />
            </div>
          </div>
          <div className="">
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full mb-4 "
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message in detailed"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full "
              ></textarea>
            </div>
          </div>

          <div className="text-center bg-redC rounded-xl text-lightC">
            <button
              type="submit"
              className=" text-lightC bg-blackC font-bold  px-8 py-2 inline-block tsgf"
            >
              Send
            </button>
          </div>
        </div>
      </form>

      {showSuccessMessage && (
        <div className="success-message bg-green-200 text-green-800 p-2 rounded mt-4">
          <p>Thanks for messaging</p>
          <p>We'll respond to you as soon as possible.</p>
        </div>
      )}
    </>
  );
};

export default Cform;
