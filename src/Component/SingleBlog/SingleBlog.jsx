import React from "react";
import "./SingleBlog.css";
const SingleBlog = ({ blog }) => {
  return (
    <div>
      <div className="single-blog">
        <img className="img" src={blog.coverImage} alt="" />
        <div className="blog-info">
          <div className="author-info">
            <div>
              <img src="" alt="" />
              <p>Mr Raju</p>
              <p>Mar 14 (4days ago)</p>
            </div>
            <div>
              <p>05 min read</p>
              <button>B</button>
            </div>
          </div>
          <p>How to lear html</p>
          <p>#beginners #programming</p>
          <a href="#">Mark as read</a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
