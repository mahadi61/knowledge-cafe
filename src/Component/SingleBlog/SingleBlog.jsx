import React from "react";
import "./SingleBlog.css";
const SingleBlog = ({ blog }) => {
  return (
    <>
      <div className="single-blog">
        <img className="img" src={blog.coverImage} alt="" />
        <div className="blog-info">
          <div className="author-info">
            <div className="author-name-img">
              <div className="author-img-container">
                <img className="author-img" src={blog.authorImage} alt="" />
              </div>
              <div>
                <span className="author-name">{blog.authorName}</span>
                <br />
                <span>{blog.publishDate}</span>
              </div>
            </div>
            <div>
              <p>{blog.readTime} min read</p>
              <button>B</button>
            </div>
          </div>
          <p>{blog.blogTitle}</p>
          <p>#beginners #programming</p>
          <a href="#">Mark as read</a>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
