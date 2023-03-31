import React from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import "./Home.css";
const Home = () => {
  return (
    <div className="main-container">
      <div className="blog-container">
        <Blog></Blog>
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
