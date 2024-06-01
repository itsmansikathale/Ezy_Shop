import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
// add import dropdown_icon from the assets
import Item from "../Components/Items/Item";
// import all_product from "../Components/Assets/all_product";
import all_product from "../Components/Assets/all_product.js";



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-cat">
      <img className="sc-banner"  src={props.banner} alt="" />
      <div className="category-index-sort">
        <p>
          <span>Showing 1-10</span> out of 30 Products.
        </p>
        <div className="category-sort">
          Sort by 
        </div>
      </div>
      <div className="sc-products">
        {all_product.map((item, i) => {
          if (props.category===item.category) {
            return <Item  key={i} id={item.id} name={item.name}
            image={item.image} new_price={item.new_price}
            old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="sc-loadmore">
       <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
