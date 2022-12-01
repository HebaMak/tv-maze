import { useContext, useState, useEffect } from "react";
import { context } from "../hooks/context";
import SingleShow from "../components/SingleShow";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Favorites = () => {
  const { favorites } = useContext(context);
  const [shows, setShows] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const promises = favorites.map((id) => {
      return fetch(`https://api.tvmaze.com/shows/${id}`);
    });
    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((data) => {
        setShows(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [favorites]);

  return (
    <div className="container">
      {shows.length === 0 && <h1>You Haven't Chosen any Favorites yet! </h1>}
      {isLoading && <Loading text="Favorite Shows coming soon!" />}
      {isError && <Error text="Error is Found!" />}
      {shows && shows.map((show) => <SingleShow key={show.id} show={show} />)}
    </div>
  );
};

export default Favorites;
