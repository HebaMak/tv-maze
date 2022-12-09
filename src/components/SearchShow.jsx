import { Link } from "react-router-dom";
import FavIcon from "./FavIcon";

const SearchShow = ({ show }) => {
  const { id, name, image } = show.show;

  return (
    <div className="card-container">
      <Link to={`/show/${id}`}>
        <img
          src={image ? image.medium : "https://plchldr.co/i/210x295"}
          alt={name}
          className="card-img-top"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <div className="heart-rating d-flex justify-content-between">
          <FavIcon id={id} />
          <div>
            <i className="fa fa-solid fa-star me-2"></i>
            <span>{(show.score * 10).toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShow;
