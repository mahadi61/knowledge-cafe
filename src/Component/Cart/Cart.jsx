import React from "react";
import "./Cart.css";
import BlogCart from "../BlogCart/BlogCart";
const Cart = ({ blogs }) => {
  return (
    <div>
      <div className="spent-time">
        <span>Spent time on read : 177 min</span>
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
