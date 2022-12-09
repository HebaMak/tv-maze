import { useContext } from "react";
import { context } from "../hooks/context";

const FavIcon = ({ id }) => {
  const { isFav, handleFavorite } = useContext(context);

  const inFav = isFav(id);

  return (
    <div className="favorite-icon">
      <i
        className={inFav ? "fa fa-heart red" : "fa fa-heart"}
        aria-hidden="true"
        onClick={() => handleFavorite(id)}
      ></i>
    </div>
  );
};

export default FavIcon;
