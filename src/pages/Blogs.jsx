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
      <div>
        {/* Display the list of blogs */}
        {blogs.map((blog) => (
          <div key={blog.objectId}>
            <h2>{blog.title}</h2>
            <p>Poster: {blog.posterName}</p>
            <p>Date: {blog.date}</p>
            <p>{blog.content}</p>
          </div>
        ))}
        {/* <BlogForm onPostSubmit={handlePostSubmit} /> */}
      </div>
    </>
  );
};

export default Blogs;
