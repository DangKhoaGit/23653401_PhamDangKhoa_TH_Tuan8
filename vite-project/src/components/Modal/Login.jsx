import React, { useState } from "react";
import "./Login.css"; // Chúng ta sẽ viết CSS ở file này
import { FaTimes, FaGoogle, FaFacebook, FaApple } from "../../../node_modules/react-icons/fa";
import image from "../../assets/Image 72.png"

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="login-overlay">
        
      {/* Quan trọng: Phải gắn onClick={onClose} vào nút X hoặc overlay */}
      <button onClick={onClose} className="close-button">X</button>

      <div className="login-container">
        {/* BÊN TRÁI: HÌNH ẢNH & QUOTE */}
        <div className="login-image-side">
          <div className="quote-container">
            <img src={image} alt="" />
          </div>
        </div>

        {/* BÊN PHẢI: FORM ĐĂNG NHẬP */}
        <div className="login-form-side">
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="form-content">
            <h2>Login</h2>
            <p className="subtitle">Enter your email to log in.</p>

            <input
              type="email"
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn-continue">Continue</button>

            <div className="separator">
              <span>OR</span>
            </div>

            <p className="terms">
              By continuing, you agree to the updated <span>Terms of Sale</span>, 
              <span> Terms of Service</span>, and <span>Privacy Policy</span>.
            </p>

            <div className="social-group">
              <button className="social-btn">
                <FaGoogle className="icon google" /> Continue with Google
              </button>
              <button className="social-btn">
                <FaFacebook className="icon facebook" /> Continue with Facebook
              </button>
              <button className="social-btn">
                <FaApple className="icon apple" /> Continue with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;