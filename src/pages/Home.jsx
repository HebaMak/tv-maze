import { useContext } from "react";
import { context } from "../hooks/context";

function Home() {
  const { shows, isLoading, isError } = useContext(context);
  console.log(shows);
  return <div className="container homepage"></div>;
}

export default Home;
