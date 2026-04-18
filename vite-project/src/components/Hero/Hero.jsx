import "./Hero.css";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} />

      <div className="card">
        <span className="tag">Recipe of the day</span>
        <h2>Salad Caprese</h2>
        <p>
          Classic Italian salad Caprese: ripe tomatoes, fresh mozzarella, basil,
          olive oil and balsamic vinegar create a refreshing dish.
        </p>

        <button>View now →</button>
      </div>
    </div>
  );
}