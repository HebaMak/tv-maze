import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Ads from "../components/Ads";

const People = () => {
  const {
    data: allPeople,
    isLoading,
    isError,
  } = useFetch(`https://api.tvmaze.com/people`);

  const [error, setError] = useState(false);
  const [people, setPeople] = useState(allPeople);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setPeople(allPeople);
  }, [allPeople, searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      setPeople(allPeople);
      setError(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const value = searchValue.toLowerCase();
    const filtered = people.filter((person) => {
      setError(false);
      return person.name.toLowerCase().includes(value);
    });

    if (filtered.length === 0) {
      setError(true);
      setPeople([]);
    } else {
      setError(false);
      setPeople(filtered);
    }
  };

  return (
    <div className="container people-page">
      <Ads />

      <h1>People</h1>
      <form className="searchField-form d-flex" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="search people ..."
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
        <i className="fa fa-search search-btn" onClick={handleSearch}></i>
      </form>
      <div className="people-content">
        {isLoading && <Loading text="People coming soon!" />}
        {isError && <Error text="Something went Wrong" />}
        {error && (
          <>
            <Error text={`There is No person with the name ${searchValue}`} />
            <button
              className="back_people"
              onClick={() => window.location.reload()}
            >
              Back to People
            </button>
          </>
        )}
        {people && <Pagination shows={people} num="60" people />}
      </div>
    </div>
  );
};

export default People;
