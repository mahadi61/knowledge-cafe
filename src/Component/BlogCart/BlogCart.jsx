import React from "react";
import "./BlogCart.css";
const BlogCart = ({ blog }) => {
  return (
    <div className="blog-cart-title">
      <h3>{blog.blogTitle}</h3>
    </div>
  );
};

export default BlogCart;
