import "./Section.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import Container from "../Layout/Container";

export default function Section({ title, desc, data }) {
  return (
    <Container>
      <div className="section">
        <h2>{title}</h2>
        <p>{desc}</p>

        <div className="grid">
          {data.map(i => <RecipeCard key={i.id} item={i} />)}
        </div>
      </div>
    </Container>
  );
}