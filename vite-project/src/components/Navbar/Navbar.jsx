import "./Navbar.css";
import logo from "../../assets/Group 9.png";
import Container from "../Layout/Container";
import Login from "../Modal/Login";
import { useEffect, useState } from "react";
import SignUp from "../Modal/Signup";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignUp] = useState(false);

  // Hàm để đóng Modal, có thể dùng lại ở nhiều nơi
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleCloseSignup = () => setOpenSignUp(false);
  const handleOpenSignup = () => setOpenSignUp(true);
  

  // Vô hiệu hóa scroll khi modal mở. Chưa hoàn thiện.
  // useEffect( () =>{
  //   if(openSignup){
  //     document.body.classList.add("overflow");
  //   } else {
  //     document.body.classList.remove("overflow");
  //   }

  //   // Cleanup function để remove event listener khi component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }

  // }, [] )

  const [search, setSearch] = useState(""); // Khởi tạo là chuỗi rỗng
  const navigate = useNavigate();

  const handlerSearch = (title) => {
    if (title && title.trim() !== "") {
      navigate(`/search/${title}`);
    }
  };

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
              value={search}
              // 1. Cập nhật state khi người dùng gõ phím
              onChange={(e) => setSearch(e.target.value)}
              // 2. (Gợi ý thêm) Chuyển trang khi nhấn Enter để trải nghiệm tốt hơn
              onKeyDown={(e) => e.key === 'Enter' && handlerSearch(search)}
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

            <button className="subscribe"
            onClick={handleOpenSignup}>
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

      {/* Render Modal SignUp dựa trên điều kiện openSignup */}
      {openSignup && (
        <SignUp 
          isOpen={openSignup}  /* Đã sửa từ open thành openSignup */
          onClose={handleCloseSignup} /* Dùng hàm handleCloseSignup đã tạo ở trên cho gọn */
          
        />
      )}
      
    </div>
  );
}