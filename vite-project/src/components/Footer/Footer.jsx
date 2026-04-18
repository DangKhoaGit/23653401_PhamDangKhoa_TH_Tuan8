import "./Footer.css";
import logo from "../../assets/Group 9.png";
import Container from "../Layout/Container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          {/* Column 1 */}
          <div className="col about">
            <h4>About Us</h4>
            <p>
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>

            <div className="subscribe-box">
              <input placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col">
            <h4>Learn More</h4>
            <p>Our Cooks</p>
            <p>See Our Features</p>
            <p>FAQ</p>
          </div>

          {/* Column 3 */}
          <div className="col">
            <h4>Shop</h4>
            <p>Gift Subscription</p>
            <p>Send Us Feedback</p>
          </div>

          {/* Column 4 */}
          <div className="col">
            <h4>Recipes</h4>
            <p>What to Cook This Week</p>
            <p>Pasta</p>
            <p>Dinner</p>
            <p>Healthy</p>
            <p>Vegetarian</p>
            <p>Vegan</p>
            <p>Christmas</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="left">
            <img src={logo} />
            <span>2023 Cheffy Company</span>
          </div>

          <div className="right">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}