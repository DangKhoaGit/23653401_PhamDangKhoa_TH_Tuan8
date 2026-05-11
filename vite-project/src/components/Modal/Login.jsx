import React, { useRef, useState } from "react";
import "./Login.css"; // Chúng ta sẽ viết CSS ở file này
import { FaTimes, FaGoogle, FaFacebook, FaApple } from "../../../node_modules/react-icons/fa";
import image from "../../assets/Image 72.png"
import { useRecoilState } from "recoil";
import { userAtom } from "../../recoil/userAtom";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

const loginGoogle = async () => {

  const result = await signInWithPopup(auth, provider);

  const user = result.user;

  setUser({
    id: user.uid,
    first_name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
    provider: "google"
  });

  onClose();
};

import { FacebookAuthProvider } from "firebase/auth";

export const facebookProvider = new FacebookAuthProvider();

const loginFacebook = async () => {

  const result = await signInWithPopup(auth, facebookProvider);

  const user = result.user;

  setUser({
    id: user.uid,
    first_name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
    provider: "facebook"
  });

  onClose();
};

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useRecoilState(userAtom);

  const refEmail = useRef(null);

  if (!isOpen) return null;

 const handlerLogin = async () => {
    try {
      const response = await fetch("user.json");

      if (!response.ok) {
        console.log("Không đọc được file");
        return;
      }

      const data = await response.json();

      const user = data.find((item) => item.email === email);

      if (user && user.password === pass) {
        setUser(user);

        console.log("Đăng nhập thành công");

        // đóng modal
        onClose();

      } else {
        console.log("Sai email hoặc password");

        // focus vào email
        emailRef.current?.focus();

        return null;
      }

    } catch (error) {
      console.log(error);
    }
  };

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
              ref={refEmail}
              type="email"
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button className="btn-continue" onClick={handlerLogin}>
              Continue
            </button>

            <div className="separator">
              <span>OR</span>
            </div>

            <p className="terms">
              By continuing, you agree to the updated <span>Terms of Sale</span>, 
              <span> Terms of Service</span>, and <span>Privacy Policy</span>.
            </p>

            <div className="social-group">
              <button className="social-btn" onClick={
                loginGoogle
              }>
                <FaGoogle className="icon google" /> Continue with Google
              </button>
              <button className="social-btn" onClick={loginFacebook}>
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