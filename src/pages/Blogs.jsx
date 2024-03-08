import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroAds from "../Components/HeroAds";
import BlogForm from "../Backendless/BlogForm";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://api.backendless.com/DD77255D-6502-F03A-FFCE-39208DC9DC00/4FBAD162-6DAE-4B4E-9441-E57DDAEDCC17/data/BlogPost",
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handlePostSubmit = () => {
    console.log("Handling post submit...");
    fetchBlogs();
  };

  return (
    <>
      <HeroAds />
      <div className="h-32"></div>
      <div className="px-4 flex flex-col gap-16 ">
        {blogs.map((blog) => (
          <div key={blog.objectId} className="flex flex-col gap-2">
            <h2 className="font-semibold tsgf">{blog.title}</h2>

            <p className="text-justify tsgf">{blog.content}</p>
            <p className="text-justify tsgf">{blog.content1}</p>
            <p className="text-justify tsgf">{blog.content2}</p>
            <p className="italic tsgf">Date: {blog.date}</p>
            <p className=" italic tsgf">Posted by: {blog.posterName}</p>
          </div>
        ))}
        {/* <BlogForm onPostSubmit={handlePostSubmit} /> */}
      </div>
    </>
  );
};

export default Blogs;
