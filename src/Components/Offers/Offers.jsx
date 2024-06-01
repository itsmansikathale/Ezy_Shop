import React from "react";
import "./Offers.css";
import offer_ex from '../Assets/offers_ex.jpg'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive Offer</h1>
        <br />
        <p>ON BEST SELLERS PRODUCT</p>
        <button>Visit Now</button>
      </div>
      <div className="offers-right">
        <img src={offer_ex} alt="" />
      </div>
    </div>
  );
};

export default Offers;
