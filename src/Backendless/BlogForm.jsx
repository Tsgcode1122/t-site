import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const BlogForm = ({ onPostSubmit }) => {
  const [title, setTitle] = useState("");
  const [posterName, setPosterName] = useState("");
  const [content, setContent] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new blog post object
    const newBlogPost = {
      title,
      posterName,
      content,
      content1,
      content2,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      // Submit the new blog post to Backendless
      await axios.post(
        "https://api.backendless.com/DD77255D-6502-F03A-FFCE-39208DC9DC00/4FBAD162-6DAE-4B4E-9441-E57DDAEDCC17/data/BlogPost",
        newBlogPost,
      );

      setSuccessMessage("Blog post submitted successfully!");
      setTitle("");
      setPosterName("");
      setContent("");
    } catch (error) {
      console.error("Error submitting blog post:", error.message);
    }
  };

  return (
    <>
      <div className="h-32"></div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="px-8">
        <label className="flex justify-between ">
          Title:
          <textarea
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-28 w-72 "
          />
        </label>
        <br />
        <label className="flex justify-between ">
          Poster Name:
          <input
            type="text"
            value={posterName}
            onChange={(e) => setPosterName(e.target.value)}
          />
        </label>
        <br />
        <label className="flex justify-between ">
          <span>Content:</span>
          <ReactQuill
            value={content}
            onChange={(value) => setContent(value)}
            className="h-72 w-[18rem]"
          />
        </label>
        <label className="flex justify-between ">
          <span></span>
          <ReactQuill
            value={content1}
            onChange={(value) => setContent1(value)}
            className="h-72 w-[18rem]"
          />
        </label>
        <label className="flex justify-between ">
          <span></span>
          <ReactQuill
            value={content2}
            onChange={(value) => setContent1(value)}
            className="h-72 w-[18rem]"
          />
        </label>
        <br />
        <div className="flex justify-center  bg-brightC mt-20">
          <button type="submit" className="text-center">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;
