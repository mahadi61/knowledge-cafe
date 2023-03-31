import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav-bar">
      <span className="nav-title">Info House</span>
      <div className="nav-img-container">
        <img
          className="nav-img"
          src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?w=360&t=st=1680280086~exp=1680280686~hmac=135e585f1a3343405abb6736f226a9265e17bd158afea492d4d7f5c3f22606aa"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
