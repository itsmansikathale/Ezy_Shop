import React from 'react'
import './Footer.css'
import insta_icon from '../Assets/insta_icon.png'
import twitter2 from '../Assets/twitter2.png'
import whatsapp2 from '../Assets/whatsapp2.png'
// import FontAwesomeIcon from './FontAwesomeIcon'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerlogo">
            <h1>EzyShop</h1>
            </div> 
            <ul className="footer-links">
                <li>Company </li>
                <li>Product</li>
                <li>About</li>
                {/* <li></li> */}
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    {/* {/* <img src={insta_icon} alt="" /> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-instagram" />  */}
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="footer-icons-container">
                    {/* <img src={twitter2} alt="" /> */}
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
                <div className="footer-icons-container">
                    {/* <img src={whatsapp2} alt="" /> */}
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
            <div className="footer-copywrite">
                <hr />
                <br />
                <h4>Copyright @ 2024 - All Right Reserved .</h4>
            </div>
            <br />
      
    </div>
  )
}

export default Footer
