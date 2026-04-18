import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipe/:id", element: <RecipeDetail /> },
]);

export default router;