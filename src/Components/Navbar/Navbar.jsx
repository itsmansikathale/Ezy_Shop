import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import cart from '../Assets/cart.png'
// import cart2 from '../Assets/cart2.png'
import { Link } from 'react-router-dom'
// import cart_new from'../Assets/cart_new.png'

const Navbar = () => { 
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
            <h1>EzyShop</h1>
        </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration:'none'}}  to='/men '>Men</Link> {menu==="men"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to='/women'>Women</Link>{menu==="women"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="kids"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-signin-cart">
        <Link to='/sign'><button>Sign in</button></Link>
        <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
