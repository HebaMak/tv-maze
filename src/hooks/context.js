import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  const {
    data: allShows,
    isError,
    isLoading,
  } = useFetch("https://api.tvmaze.com/shows");

  useEffect(() => {
    setShows(allShows);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [allShows, shows, favorites]);

  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const favoritesIds = favorites.filter((favId) => favId !== id);
      setFavorites(favoritesIds);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
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
    favorites,
    clearFavorites,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
