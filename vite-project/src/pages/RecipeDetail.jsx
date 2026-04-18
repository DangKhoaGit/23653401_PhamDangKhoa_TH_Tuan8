import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { recipeState } from "../recoil/recipeAtom";
import "./RecipeDetail.css";
import Container from "../components/Layout/Container";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipes = useRecoilValue(recipeState);

  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <Container>
      <div className="detail">
        {/* HEADER */}
        <div className="header">
          <img src={recipe.image} />
          <div className="info">
            <h1>{recipe.title}</h1>
            <p className="desc">{recipe.description}</p>

            <div className="meta">
              <span>⏱ {recipe.time} mins</span>
              <span>🍽 {recipe.servings} servings</span>
              <span>👨‍🍳 {recipe.author}</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {/* INGREDIENTS */}
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>

          {/* STEPS */}
          <div className="steps">
            <h2>Instructions</h2>
            <ol>
              {recipe.steps.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* VIDEO */}
        <div className="video">
          <h2>Video Guide</h2>
          <iframe
            src={recipe.video}
            title="video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  );
}