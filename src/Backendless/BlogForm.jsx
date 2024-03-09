import React, { useState, useEffect } from "react";
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

    const newBlogPost = {
      title,
      posterName,
      content,
      content1,
      content2,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      await axios.post(
        "https://api.backendless.com/DD77255D-6502-F03A-FFCE-39208DC9DC00/4FBAD162-6DAE-4B4E-9441-E57DDAEDCC17/data/BlogPost",
        newBlogPost,
      );

      setSuccessMessage("Blog post submitted successfully!");
      setTitle("");
      setPosterName("");
      setContent("");
      setContent1("");
      setContent2("");
    } catch (error) {
      console.error("Error submitting blog post:", error.message);
    }
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSuccessMessage("");
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [successMessage]);
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      ["link", "image", "video"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
      ["blockquote", "code-block"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    // "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "image",
    "video",
    "list",
    "bullet",
    "indent",
    "clean",
    "blockquote",
    "code-block",
  ];

  return (
    <div className="mx-auto my-10 px-4 pt-20 sl:mx-36">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6">
          Admin Dashboard - New Blog Post
        </h2>
        <label className="flex flex-col mb-4">
          <span className="mb-2">Title:</span>
          <textarea
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-16 border p-2 rounded focus:outline-none"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span className="mb-2">Poster Name:</span>
          <input
            type="text"
            value={posterName}
            onChange={(e) => setPosterName(e.target.value)}
            className="h-10 border p-2 rounded focus:outline-none"
          />
        </label>
        <label className="flex flex-col mb-4">
          <span className="mb-2">Content:</span>
          <div className="grid grid-cols-1 s:grid-cols-2 gap-20">
            <ReactQuill
              value={content}
              onChange={(value) => setContent(value)}
              modules={modules}
              formats={formats}
              className=" border p-2 rounded focus:outline-none"
            />
            <textarea
              type="text"
              value={content1}
              onChange={(e) => setContent1(e.target.value)}
              className=" h-[20rem] border p-2 rounded focus:outline-none"
            />
            <textarea
              type="text"
              value={content2}
              onChange={(e) => setContent2(e.target.value)}
              className=" h-[20rem] border p-2 rounded focus:outline-none"
            />
          </div>
        </label>
        <div className="flex justify-center mt-20">
          <button
            type="submit"
            className="bg-brightC text-white py-2 px-6 rounded hover:bg-blue-500 focus:outline-none"
          >
            Submit
          </button>
        </div>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default BlogForm;
