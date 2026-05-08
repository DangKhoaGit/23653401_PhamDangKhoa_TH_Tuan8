import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipe/:id", element: <RecipeDetail /> },
  { path: "/search/:title" , element:<SearchPage />},
  { path: "/search/*" , element:<SearchPage />},
]);

export default router;