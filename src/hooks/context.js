import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const {
    data: allShows,
    isError,
    isLoading,
  } = useFetch("https://api.tvmaze.com/shows");

  const [searchValue, setSearchValue] = useState("");
  const { data: searchResults } = useFetch(
    `https://api.tvmaze.com/search/shows?q=${searchValue}`
  );

  const { data: allPeople } = useFetch(`https://api.tvmaze.com/people`);
  const [people, setPeople] = useState(allPeople);
  const [shows, setShows] = useState("");
  const [results, setResults] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
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

  const handleSearchHome = (e) => {
    e.preventDefault();
    setResults(searchResults);
  };

  // functions for people page
  const handleChangePeople = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      setPeople(allPeople);
      setError(false);
    }
  };

  // const handleSearchPeople = (e) => {
  //   e.preventDefault();
  //   const filtered = people.filter((person) => {
  //     setError(false);
  //     return person.name.toLowerCase().includes(searchValue.toLowerCase());
  //   });

  //   if (filtered.length === 0) {
  //     setError(true);
  //     setPeople([]);
  //   } else {
  //     setError(false);
  //     setPeople(filtered);
  //   }
  // };

  const handleSearchPeople = (e) => {
    e.preventDefault();
    const filtered = people.filter((person) =>
      person.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setError(false);
    setPeople(filtered);

    if (filtered.length === 0) {
      setError(true);
      setPeople([]);
    }
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
  const runTimes = [
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
    isFav,
    error,
    types,
    status,
    people,
    results,
    isError,
    runTimes,
    languages,
    isLoading,
    favorites,
    getGenres,
    countries,
    webChannels,
    searchValue,
    handleChange,
    handleFilter,
    createOptions,
    networksNames,
    handleFavorite,
    clearFavorites,
    handleSearchHome,
    handleSearchPeople,
    handleChangePeople,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
