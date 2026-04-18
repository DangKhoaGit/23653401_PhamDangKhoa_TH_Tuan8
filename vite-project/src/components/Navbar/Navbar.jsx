import "./Navbar.css";
import logo from "../../assets/Group 9.png";
import Container from "../Layout/Container";

export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="nav-inner">
          <div className="left">
            <img src={logo} className="logo"/>
          </div>

          <input className="search" placeholder="What would you like to cook?" />

          <div className="menu">
            <span>What to cook</span>
            <span>Recipes</span>
            <span>Ingredients</span>
            <span>Occasions</span>
            <span>About Us</span>
          </div>

          <div className="auth">
            <button className="login">Login</button>
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
      </Container>
    </div>
  );
}