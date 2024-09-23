import React from "react";
import './Offers.css';

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={require('../Assets/exclusive_image.png')} alt="" />
      </div>
    </div>
  )
}