import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="desc">
      <div className="desc-nav">
        <div className="div-desc-nav-box">Description</div>
        <div className="div-desc-nav-box fade">Review (100)</div>
      </div>
      <div className="desc-desc">
        <p>
          Welcome to <span>SHOPIFY</span>, where convenience meets quality and
          your shopping experience is our top priority. We're passionate about
          providing you with a seamless online shopping experience, offering a
          vast selection of products that cater to your every need. Whether
          you're searching for the latest fashion trends, cutting-edge gadgets,
          or everyday essentials, we've got you covered.
        </p>
        <p>
          Thank you for choosing SHOPIFY for all your online shopping needs. Sit
          back, relax, and enjoy the ultimate shopping experience, right at your
          fingertips. Happy shopping!
        </p>
      </div>
    </div>
  );
};

export default Description;
