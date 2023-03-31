import React from "react";
import "./Cart.css";
import BlogCart from "../BlogCart/BlogCart";
const Cart = ({ blogs, time }) => {
  return (
    <div>
      <div className="spent-time">
        <span>Spent time on read : {time} min</span>
      </div>
      <div className="bookmarked">
        <span className="bookmark-count">
          Bookmarked Blogs : {blogs.length}
        </span>
        <div>
          {blogs.map((blog) => (
            <BlogCart blog={blog}></BlogCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
