import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Blog.css";
const Blog = ({ bookMarked, markAsRead }) => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <SingleBlog
          key={blog.id}
          markAsRead={markAsRead}
          bookMarked={bookMarked}
          blog={blog}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
