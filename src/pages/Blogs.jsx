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
      <p className="text-center mb-5 font-semibold">
        Read our brief blog for quick insights and interesting snippets.
      </p>
      <div className="px-4 flex flex-col gap-8 l:grid l:grid-cols-2  l:gap-8 mx-4 l:mx-12 sl:mx-28 text-left ">
        {blogs.map((blog) => (
          <div
            key={blog.objectId}
            className="flex flex-col gap-2 box-shad p-4 rounded-3xl"
          >
            <h2 className="font-semibold tsgf">{blog.title}</h2>

            <p
              className="text-justify tsgf"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <p
              className="text-justify tsgf"
              dangerouslySetInnerHTML={{ __html: blog.content1 }}
            />

            <p
              className="text-justify tsgf"
              dangerouslySetInnerHTML={{ __html: blog.content2 }}
            />

            <p className="italic tsgf">Date: {blog.date}</p>
            <p className="italic tsgf">Posted by: {blog.posterName}</p>
          </div>
        ))}

        {/* <BlogForm onPostSubmit={handlePostSubmit} /> */}
      </div>
    </>
  );
};

export default Blogs;
