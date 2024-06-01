import React, { useContext } from "react";
import "./CartItem.css";
import {ShopContext} from '../../Context/ShopContext'


const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } = 
  useContext(ShopContext);

  return (
    <div className="ci">
      <div className="ci-main-format">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="ci-format ci-main-format">
                <img src={e.image} alt="" className="cart_product_icon" />
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <button className="ci-quantity">{cartItem[e.id]}</button>
                <p>Rs.{e.new_price*cartItem[e.id]}</p>
                <i class="fa-solid fa-trash-can-arrow-up"></i>
                <img 
                  src=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="ci-down">
        <div className="ci-total">
            <h1>Cart Total</h1>
            <div className="ci-total-item">
                <p>Sub Total</p>
                <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="ci-total-item"> 
                  <p>Shipping Fee</p>
                  <p>Free</p>  
            </div>
            <hr />
            <div className="ci-total-item">
                <h3>Total</h3>
                <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED</button>
        </div>
        <div className="ci-promocode">
            <p>If you have a Promo Code , Enter Here..</p>
            <div className="ci-promobox">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
