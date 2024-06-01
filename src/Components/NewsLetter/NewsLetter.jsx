import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <br />
      <br />

      <p>Subscribe to our Newsletter for latest Updates </p>
      <br />
      <br />
      <br />

      <div>
        <input type="email" placeholder="Enter Your Email Id " />
        <button>Subscribe</button>
      </div>
      <br />
    </div>
  );
};

export default NewsLetter;
