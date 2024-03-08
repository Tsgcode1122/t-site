import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import HeroAds from "../Components/HeroAds";

const Blogs = () => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const socket = io("https://your-socket-server-endpoint.com");

  //   // Handle new blog posts
  //   socket.on("newBlog", (newBlog) => {
  //     setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  return (
    <>
      <HeroAds />
      {/* <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Poster: {blog.posterName}</p>
            <p>Date: {blog.date}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div> */}
      <div className="h-28"></div>
      <h4 className="text-center">No Post Yet....</h4>
    </>
  );
};

export default Blogs;
