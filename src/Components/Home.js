import { useState, useEffect } from "react";
import RecipeCards from "./RecipeCards";
import { client } from "../client";

const Home = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main>
      <h1 className="my-5">Julias Suppenkochbuch</h1>
      <div className="container">
        <div className="row">
          {recipes
            ? recipes.map((recipe) => (
                <RecipeCards key={recipe.sys.id} {...recipe} />
              ))
            : "Loading..."}
        </div>
      </div>
    </main>
  );
};

export default Home;
