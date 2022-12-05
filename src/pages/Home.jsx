import { useContext } from "react";
import { context } from "../hooks/context";
import Ads from "../components/Ads";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import FilterSidebar from "../components/FilterSidebar";

function Home() {
  const { shows, isLoading, isError, results } = useContext(context);

  return (
    <div className="container homepage">
      <SearchField placeholder="Search Shows..." />
      <Ads />
      <div className="home-content">
        <div className="shows">
          <h1>Shows</h1>
          {isLoading && (
            <Loading text="Don't Break Your Screen Yet!?😀 Shows are coming" />
          )}
          {isError && <Error text="Error in Fetching data" />}
          {results.length > 0 ? (
            <Pagination shows={results} num="15" search />
          ) : (
            <>{shows && <Pagination shows={shows} num="15" />}</>
          )}
        </div>
        <div className="filters">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
