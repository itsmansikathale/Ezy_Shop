import React from "react";
import "./Hero.css";
// import hand_icon from '../Assets/hand_icon.png'
// import hand_icon from '../Assets/hand_icon.png'
// import hero_image2 from '../Assets/hero_image2.png'
// import hero_image_org from '../Assets/hero_image_org.png'
// import hero_image3 from '../Assets/hero_image3.pmg.jpg'
// import hero_image4 from '../Assets/hero_image4.jpg'
import hero7 from '../Assets/hero7.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        {/* <h2>NEW ARRIVALS</h2> */}
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
          <br />
          <br />
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero7} alt="" />
      </div>
    </div>
  );
};

export default Hero;
