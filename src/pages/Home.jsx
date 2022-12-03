import { useContext } from "react";
import { context } from "../hooks/context";
import Ads from "../components/Ads";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Pagination from "../components/Pagination";

function Home() {
  const { shows, isLoading, isError } = useContext(context);

  return (
    <div className="container homepage">
      {isLoading && (
        <Loading text="Don't Break Your Screen Yet!?😀 Shows are coming 😀" />
      )}
      {isError && <Error text="Error in Fetching data" />}
      <Ads />
      {shows && <Pagination shows={shows} num="15" />}
    </div>
  );
}

export default Home;
