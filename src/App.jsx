import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import WhyUs from "./pages/WhyUs";
import Blogs from "./pages/Blogs";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import SinglePortfolio from "./Components/SinglePortfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "Contact", element: <Contact /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "WhyUs", element: <WhyUs /> },
      { path: "Blogs", element: <Blogs /> },
      {
        path: "Portfolio/:portfolioId",
        element: <SinglePortfolio />,
      },
    ],
  },
]);
const App = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setContentVisible(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {contentVisible ? (
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
