import { Link } from "react-router-dom";

const SingleShow = ({ show }) => {
  const { name, image, id, rating } = show;

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
          <div>
            <i class="fas fa-solid fa-star me-2"></i>
            <span>{rating.average}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShow;
