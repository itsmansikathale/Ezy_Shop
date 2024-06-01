import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
// import star_icon from "../Assets/star-icon.png";
// import dull_star_icon from "../Assets/dull_star_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="pd">
      <div className="pd-left">
        <div className="pd-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="pd-img">
          <img className="pd-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="pd-right">
        <h1>{product.name}</h1>
        <div className="pd-right-star">
          {/* <img src={star_icon} alt="" /> */}
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          {/* <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dull_star_icon} alt="" /> */}
          <p>(101)</p>
        </div>
        <div className="pd-right-price">
          <div className="right-price-old">Rs.{product.old_price}</div>
          <div className="pd-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="pd-right-desc"></div>
        <div className="pd-right-size">
          <h1>Select Size</h1>
          <div className="pd-right-select-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART </button>
        <p className="pd-right-cat">
          <span>Category </span>Women , T-Shirt, Crop Top
        </p>
     
        <p className="pd-right-cat">
          <span>Tags </span>Modern, Latest Fashion
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
