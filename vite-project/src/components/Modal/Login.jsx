import React, { useState } from "react";
import "./Login.css"; // Chúng ta sẽ viết CSS ở file này
import { FaTimes, FaGoogle, FaFacebook, FaApple } from "../../../node_modules/react-icons/fa";
import image from "../../assets/Image 72.png"
import { useRecoilValue } from "recoil";
// import { userAtom } from "../../recoil/userAtom";

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  // const userAtom = useRecoilValue(userAtom);

  if (!isOpen) return null;

  const handlerLogin = () => {
    const data = [];
    const promise = fetch(`user.json`)
    .then( e => {
      console.log(e.body);
    } )

  }

  return (
    <div className="login-overlay" onClick={onClose}>

      <div className="login-container" onClick={(e) => {e.stopPropagation()}}>
        {/* BÊN TRÁI: HÌNH ẢNH & QUOTE */}
        <div className="login-image-side">
          <div className="quote-container">
            <img src={image} alt=""/>
          </div>
        </div>

        {/* BÊN PHẢI: FORM ĐĂNG NHẬP */}
        <div className="login-form-side">
          

          <div className="form-content">
            <div style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <h2>Login</h2>
              <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
            </div>
            
            <p className="subtitle">Enter your email to log in.</p>

            <input
              type="email"
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn-continue" onClick={handlerLogin()}>Continue</button>

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