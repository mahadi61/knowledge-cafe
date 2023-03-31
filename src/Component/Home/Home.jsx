import React, { useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Home.css";
const Home = () => {
  const [blogs, setBlog] = useState([]);

  const bookMarked = (blog) => {
    const newBlog = [...blogs, blog];
    const exist = blogs.find((b) => b.id === blog.id);
    if (exist) {
      toast("Already Exist!");
      setBlog(newBlog);
    } else {
      setBlog(newBlog);
    }
  };
  const [time, setTime] = useState(0);
  const markAsRead = ({ readTime }) => {
    const totalTime = time + readTime;
    setTime(totalTime);
  };

  return (
    <div className="main-container">
      <div className="blog-container">
        <Blog bookMarked={bookMarked} markAsRead={markAsRead}></Blog>
      </div>
      <div className="cart-container">
        <Cart time={time} blogs={blogs}></Cart>
      </div>
    </div>
  );
};

export default Home;
