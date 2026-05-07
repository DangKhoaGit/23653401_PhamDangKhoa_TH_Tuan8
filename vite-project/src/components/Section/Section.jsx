import "./Section.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import Container from "../Layout/Container";
import { useNavigate } from "react-router-dom";

export default function Section({ title, desc, data }) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="section">
        <h2>{title}</h2>
        <p>{desc}</p>

        <div className="grid">
          {data.map(i => (
            <div
              key={i.id}
              onClick={() => navigate(`/recipe/${i.id}`)}
              style={{ cursor: "pointer" }}
            >
              <RecipeCard item={i} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}