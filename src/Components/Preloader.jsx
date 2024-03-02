import React, { useState, useEffect } from "react";
import "../ts.css";
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className={`preloader ${loading ? "show" : "hide"}`}>
      {/* <img className="max-w-full h-[50px] " alt="Logo" /> */}
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Preloader;
