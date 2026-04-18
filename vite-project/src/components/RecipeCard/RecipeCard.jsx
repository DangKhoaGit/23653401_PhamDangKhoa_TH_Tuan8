import LazyImage from "../LazyImage/LazyImage";

export default function RecipeCard({ item }) {
  return (
    <div className="recipe-card">
      <div style={{ height: "150px" }}>
        <LazyImage src={item.image} />
      </div>

      <h4>{item.title}</h4>
      <span>{item.time} minutes</span>
    </div>
  );
}