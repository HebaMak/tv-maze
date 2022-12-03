import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [shows, setShows] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

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

  const { data: searchResults } = useFetch(
    `https://api.tvmaze.com/search/shows?q=${searchValue}`
  );

  useEffect(() => {
    if (searchResults.length === 0) {
      setShows(allShows);
    }
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

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(searchResults);
    // if (searchValue.trim().length === 0) {
    //   setShows([]);
    // } else {
    //   if (searchResults.length === 0) {
    //     setShows([]);
    //   } else {
    //     setShows(searchResults);
    //   }
    // }
  };

  const value = {
    shows,
    isError,
    isLoading,
    isFav,
    handleFavorite,
    favorites,
    clearFavorites,
    searchValue,
    handleSearch,
    handleChange,
    results,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
