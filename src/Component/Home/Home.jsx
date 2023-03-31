import React from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import "./Home.css";
const Home = () => {
  const bookMarked = (blog) => {
    const { blogTitle, id, readTime } = blog;
    console.log(blogTitle, id, readTime);
  };
  return (
    <div className="main-container">
      <div className="blog-container">
        <Blog bookMarked={bookMarked}></Blog>
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
