import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NutritionAnalysis from "./pages/NutritionAnalysis";
import FoodDataBase from "./pages/FoodDataBase";
import RecipeSearch from "./pages/RecipeSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NutritionAnalysis />} />
        {/* <Route path="/nutrition-analysis/:id" element={<NutritionAnalysis />} /> */}
        <Route path="/food-data-base" element={<FoodDataBase />} />
        {/* <Route path="/food-data-base/:id" element={<FoodDataBase />} /> */}
        <Route path="/recipe-search" element={<RecipeSearch />} />
        {/* <Route path="/recipe-search/:id" element={<RecipeSearch />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
