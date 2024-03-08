import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogForm = ({ onPostSubmit, editMode = false, initialData }) => {
  const [title, setTitle] = useState("");
  const [posterName, setPosterName] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (editMode && initialData) {
      setTitle(initialData.title || "");
      setPosterName(initialData.posterName || "");
      setContent(initialData.content || "");
    }
  }, [editMode, initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogPostData = {
      title,
      posterName,
      content,
      date: new Date().toISOString(),
    };

    try {
      if (editMode) {
        // Update existing blog post
        await axios.put(
          `https://api.backendless.com/DD77255D-6502-F03A-FFCE-39208DC9DC00/4FBAD162-6DAE-4B4E-9441-E57DDAEDCC17/data/BlogPost/${initialData.objectId}`,
          blogPostData,
        );
      } else {
        // Create new blog post
        await axios.post(
          "https://api.backendless.com/DD77255D-6502-F03A-FFCE-39208DC9DC00/4FBAD162-6DAE-4B4E-9441-E57DDAEDCC17/data/BlogPost",
          blogPostData,
        );
      }

      setSuccessMessage("Blog post submitted successfully!");
      setTitle("");
      setPosterName("");
      setContent("");

      // Trigger the callback function to update the list of blog posts
      onPostSubmit();
    } catch (error) {
      console.error("Error submitting blog post:", error.message);
    }
  };

  return (
    <>
      <div className="h-32"></div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Poster Name:
          <input
            type="text"
            value={posterName}
            onChange={(e) => setPosterName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">{editMode ? "Update" : "Submit"}</button>
      </form>
    </>
  );
};

export default BlogForm;
