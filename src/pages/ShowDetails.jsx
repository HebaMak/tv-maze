import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const { data: show } = useFetch(`https://api.tvmaze.com/shows/${id}`);

  console.log(show);
  return (
    <div>
      <h1>show Details{show.id}</h1>
    </div>
  );
};

export default ShowDetails;
