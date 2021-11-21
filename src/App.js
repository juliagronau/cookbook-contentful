import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import RecipeIndi from "./Components/RecipeIndi";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RecipeIndi />} />
      </Routes>
    </div>
  );
}

export default App;
