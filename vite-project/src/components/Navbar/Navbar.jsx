import "./Navbar.css";
import logo from "../../assets/Group 9.png";
import Container from "../Layout/Container";
import Login from "../Modal/Login";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Hàm để đóng Modal, có thể dùng lại ở nhiều nơi
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="navbar">
      <Container>
        <div className="nav-inner">
          <div className="left">
            <img src={logo} className="logo" alt="Chefify Logo" />
          </div>

          <div className="search-container">
            <input
              className="search"
              placeholder="What would you like to cook?"
            />
          </div>

          <div className="menu">
            <span>What to cook</span>
            <span>Recipes</span>
            <span>Ingredients</span>
            <span>Occasions</span>
            <span>About Us</span>
          </div>

          <div className="auth">
            {/* Nút Login kích hoạt state open */}
            <button className="login-btn" onClick={handleOpen}>
              {console.log("Đã bấm login")}
              Login
            </button>

            <button className="subscribe">
              Subscribe
            </button>
          </div>
        </div>
      </Container>

      {/* Render Modal dựa trên điều kiện */}
      {open && (
        <Login 
          isOpen={open}  // THÊM DÒNG NÀY
          onClose={() => setOpen(false)} 
        />
      )}
    </div>
  );
}