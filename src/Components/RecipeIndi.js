import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

const RecipeIndi = () => {
  const { id } = useParams();
  console.log(id);
  const [recipeIndi, setRecipeIndi] = useState();
  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setRecipeIndi(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      {recipeIndi ? (
        <>
          <h1 className="my-5">{recipeIndi.fields.title}</h1>
          <img
            src={recipeIndi.fields.picture.fields.file.url}
            className="img-fluid"
            alt={recipeIndi.fields.title}
          ></img>
          <h2 className="my-5">Zutaten</h2>
          <ul>
              {recipeIndi.fields.ingredient.split(",").map(ingred => <li>{ingred}</li>)}
          </ul>
          <h2 className="my-5">Zubreitung</h2>
          <div>
              <p>{recipeIndi.fields.instructions}</p>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default RecipeIndi;
