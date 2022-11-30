import { useContext } from "react";
import { context } from "../hooks/context";
import SingleShow from "../components/SingleShow";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Home() {
  const { shows, isLoading, isError } = useContext(context);

  return (
    <div className="container homepage">
      {isLoading && (
        <Loading text="Don't Break Your Screen Yet!?😀 Shows are coming 😀" />
      )}
      {isError && <Error text="Error in Fetching data" />}
      {shows && shows.map((show) => <SingleShow key={shows.id} show={show} />)}
    </div>
  );
}

export default Home;
