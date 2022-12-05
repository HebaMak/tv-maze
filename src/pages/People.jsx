import { useContext, useEffect } from "react";
import { context } from "../hooks/context.js";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Ads from "../components/Ads";

const People = () => {
  const {
    error,
    allPeople,
    setPeople,
    people,
    isError,
    isLoading,
    searchValue,
    handleSearchPeople,
    handleChangePeople,
  } = useContext(context);

  useEffect(() => {
    setPeople(allPeople);
  }, [allPeople, setPeople]);

  return (
    <div className="container people-page">
      <Ads />

      <h1>People</h1>
      <SearchField
        placeholder="Search People ..."
        handleSearch={handleSearchPeople}
        handleChange={handleChangePeople}
      />
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
        {people && !error && <Pagination shows={people} num="60" people />}
      </div>
    </div>
  );
};

export default People;
