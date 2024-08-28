/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

function LoginPopup({ setShowLogin }) {
  const [cursorState, setCursorState] = useState("Login"); // Initialize state to "Login"

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{cursorState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
          />
        </div>
        <div className="login-popup-inputs">
          {cursorState === "Sign Up" && <input type="text" placeholder='Your name' required />}
          <input type="text" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{cursorState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
          <div>
            {cursorState === "Login"
              ? <p>Don't have an account? <span onClick={() => setCursorState("Sign Up")}>Click here</span></p>
              : <p>Already have an account? <span onClick={() => setCursorState("Login")}>Login here</span></p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;