import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="signin">
      <div className="signin-container">
        <br />
        <br />
        <h1>Sign In</h1>
        <div className="signin-fields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login">
          Already have an account ? <span>Login</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms & conditions.</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
