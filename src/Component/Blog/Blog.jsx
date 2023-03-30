import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Blog.css";
const Blog = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <SingleBlog blog={blog}></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
