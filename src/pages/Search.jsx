import { useState, useEffect, useContext } from "react";
import { context } from "../hooks/context";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";

const Search = () => {
  const { searchValue, setSearchValue, handleChange } = useContext(context);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState(
    localStorage.getItem("searchResults")
      ? JSON.parse(localStorage.getItem("searchResults"))
      : []
  );

  const { data: shows } = useFetch(
    `https://api.tvmaze.com/search/shows?q=${searchValue}`
  );

  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(results));
  }, [searchValue, results]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim().length === 0) {
      setLoading(false);
      setMessage("Please enter a Show Name...");
      setError(true);
      setResults([]);
    } else {
      if (shows.length === 0) {
        setLoading(false);
        setError(true);
        setMessage(`There No Shows with the Name " ${searchValue} "`);
        setResults([]);
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setResults(shows);
        setError(false);
      }
    }
  };

  return (
    <div className="container searching-page">
      <SearchField
        placeholder="Search Shows..."
        handleSearch={handleSearch}
        handleChange={handleChange}
      />

      <div className="form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="search shows ..."
            value={searchValue}
            onChange={handleChange}
          />
          <button className="btn form-control search-btn">Search</button>
          <button
            className={
              results.length > 0
                ? "btn form-control btn-danger clear-btn"
                : "btn form-control btn-danger clear-btn none"
            }
            onClick={(e) => {
              e.preventDefault();
              setResults([]);
              setSearchValue("");
            }}
          >
            Clear Search
          </button>
        </form>
      </div>

      <div className="searching-results">
        {loading && <Loading text="Your Shows Coming soon!!" />}
        {error && <Error text={message} />}
        {results.length > 0 && <Pagination shows={results} num="50" search />}
      </div>
    </div>
  );
};

export default Search;
