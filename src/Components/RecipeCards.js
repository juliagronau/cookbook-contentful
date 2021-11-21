import { Link } from "react-router-dom";

const RecipeCards = ({ fields, sys }) => {
  return (
    <div className="col">
      <div className="card my-4" style={{ width: "18rem" }}>
        <img
          src={fields.picture.fields.file.url}
          className="card-img-top"
          alt={fields.title}
        />
        <div className="card-body">
          <h5 className="card-title">{fields.title}</h5>
          <Link to={sys.id} className="btn btn-primary">
            Zum Rezept
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
