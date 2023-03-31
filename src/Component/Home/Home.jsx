import React, { useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import "./Home.css";
const Home = () => {
  const [blogs, setBlog] = useState([]);

  const bookMarked = (blog) => {
    const newBlog = [...blogs, blog];
    setBlog(newBlog);
  };
  return (
    <div className="main-container">
      <div className="blog-container">
        <Blog bookMarked={bookMarked}></Blog>
      </div>
      <div className="cart-container">
        <Cart blogs={blogs}></Cart>
      </div>
    </div>
  );
};

export default Home;
