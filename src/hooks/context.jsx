import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  const {
    data: allShows,
    isError,
    isLoading,
  } = useFetch("https://api.tvmaze.com/shows");

  useEffect(() => {
    setShows(allShows);
  }, [allShows, shows]);

  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const favoritesIds = favorites.filter((favId) => favId !== id);
      setFavorites(favoritesIds);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFav = (id) => {
    return favorites.includes(id);
  };

  const value = {
    shows,
    isError,
    isLoading,
    isFav,
    handleFavorite,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
