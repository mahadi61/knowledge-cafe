import React from "react";
import Blog from "../Blog/Blog";
import "./Home.css";
const Home = () => {
  return (
    <div className="main-container">
      <div>
        <Blog></Blog>
      </div>
      <div>this is cart</div>
    </div>
  );
};

export default Home;
