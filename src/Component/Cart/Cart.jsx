import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <div className="spent-time">
        <span>Spent time on read : 177 min</span>
      </div>
      <div className="bookmarked">
        <span className="bookmark-count">Bookmarked Blogs : 8</span>
        <div>
          <p>Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
