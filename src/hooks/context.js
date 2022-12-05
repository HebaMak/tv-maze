import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [shows, setShows] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

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
    if (filteredShows.length !== 0) {
      setShows(filteredShows);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [allShows, shows, favorites, searchResults, filteredShows]);

  //functions for favorite page
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

  // functions for search page and search field
  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(searchResults);
  };

  //functions and variables for filter sidebar
  const networks =
    shows && shows.map((show) => show.network).filter((show) => show !== null);
  const networksNames = [
    ...new Set(networks && networks.map((network) => network.name)),
  ];
  const countries = [
    ...new Set(networks && networks.map((network) => network.country.name)),
  ];
  const status = [...new Set(shows && shows.map((show) => show.status))];
  const types = [...new Set(shows && shows.map((show) => show.type))];
  const languages = [...new Set(shows && shows.map((show) => show.language))];
  const runtimes = [
    ...new Set(
      shows && shows.map((show) => show.runtime).filter((show) => show !== null)
    ),
  ];

  const channels = shows && shows.map((show) => show.webChannel);
  const webChannels = [
    ...new Set(
      shows &&
        channels
          .filter((channel) => channel !== null)
          .map((channel) => channel.name)
    ),
  ];

  const getGenres = () => {
    const allGenres = [];
    [...new Set(shows && shows.map((show) => show.genres))].map((x) =>
      x.forEach((y) => allGenres.push(y))
    );
    const result = [...new Set(allGenres)];
    return result;
  };

  const createOptions = (iterator, text) => {
    return (
      iterator &&
      iterator.map((value, index) => (
        <option value={value} key={index}>
          {`${value}  ${text ? text : ""}`}
        </option>
      ))
    );
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const index = e.nativeEvent.target.selectedIndex;
    const filterValue = e.nativeEvent.target[index].value;

    const filteredShows = shows.filter((show) => {
      const {
        status,
        type,
        genres,
        language,
        webChannel,
        network,
        runtime,
        rating,
      } = show;
      return (
        filterValue === status ||
        filterValue === type ||
        genres.includes(filterValue) ||
        filterValue === language ||
        (webChannel !== null && webChannel.name === filterValue) ||
        (network && network.country.name === filterValue) ||
        (network && network.name === filterValue) ||
        (webChannel !== null &&
          webChannel.country &&
          webChannel.country.name === filterValue) ||
        parseInt(filterValue) === parseInt(runtime) ||
        rating.average >= parseInt(filterValue)
      );
    });

    setFilteredShows(filteredShows);
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
    handleFilter,
    networksNames,
    countries,
    status,
    types,
    languages,
    runtimes,
    webChannels,
    getGenres,
    createOptions,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
