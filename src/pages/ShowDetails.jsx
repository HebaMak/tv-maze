import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import FavIcon from "../components/FavIcon";

const ShowDetails = () => {
  const { id } = useParams();
  const ID = +id;
  const URL = "https://api.tvmaze.com/shows";

  const { data: show, isError, isLoading } = useFetch(`${URL}/${ID}`);
  const { data: cast } = useFetch(`${URL}/${ID}/cast`);
  const { data: episodes } = useFetch(`${URL}/${ID}/episodes`);
  const { data: crew } = useFetch(`${URL}/${ID}/crew`);

  // const [show , setShow] = useState({})

  //clear summary
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  // show creators
  const Creators = () => {
    const creators = crew.filter((member) => member.type === "Creator");
    const creatorsNames = creators.map((member) => member.person.name);

    return (
      <>
        {creators.length === 0 && (
          <span className="text-danger"> Unknown </span>
        )}
        {creatorsNames.map((creator, index) => {
          if (index === creatorsNames.length - 1) {
            return (
              <span key={creator.id} className="text-danger">
                {creator}
              </span>
            );
          } else {
            return (
              <span key={creator.id} className="text-danger">
                {creator + ", "}
              </span>
            );
          }
        })}
      </>
    );
  };

  const {
    type,
    name,
    ended,
    image,
    genres,
    status,
    rating,
    summary,
    network,
    schedule,
    language,
    premiered,
    officialSite,
  } = show;

  console.log("show", show);

  return (
    <div className="container show-details">
      {isLoading && <Loading text="Show details Loading..." />}
      {isError && <Error text="Something Went Wrong" />}
      {show && (
        <>
          <div className="show-details-container">
            <div className="container-cart">
              <img
                alt={name}
                className="card-img-top"
                src={image ? image.medium : "https://plchldr.co/i/210x295"}
              />
              <div className="favHeart d-flex">
                <FavIcon id={show.id} />
                <span>follow</span>
              </div>
            </div>

            <div className="text-details">
              <h3 className="card-title">{name}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Show Type: </strong>
                  {genres &&
                    genres.map((genre) => (
                      <span key={genre} className="btn btn-dark show-type">
                        {genre + " "}
                      </span>
                    ))}
                </li>
                <li className="list-group-item">
                  <strong>Status:</strong> {status ? status : "unknown"}
                </li>
                <li className="list-group-item">
                  <strong>Rating: </strong>
                  {rating ? rating.average : "No rating"}
                </li>
              </ul>
              <div className="card-body">
                {officialSite ? (
                  <a
                    className="btn btn-dark"
                    href={officialSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Site
                  </a>
                ) : (
                  "No official site"
                )}
                <h5 className="summary">Summary:</h5>
                <p>
                  {summary === null
                    ? "No Summary"
                    : summary && removeTags(summary)}
                </p>
              </div>
            </div>

            <div className="show-info">
              <div className="show-info-content">
                <h3>show info</h3>
                <ul className="list-unstyled">
                  <li>
                    <strong>Web channel: </strong>
                    {network.country.name} -{network.name} -
                    {premiered ? premiered.slice(0, 4) : ""}
                    {ended ? `-${ended.slice(0, 4)}` : ""}
                  </li>
                  <li>
                    <strong>Language: </strong>{" "}
                    {language ? language : "unknown"}
                  </li>
                  <li>
                    <strong>Schedule: </strong>
                    {schedule ? schedule.days[0] : ""}
                    {schedule.time ? `, at ${schedule.time}` : ""}
                  </li>
                  <li>
                    <strong>Status: </strong> {status ? status : "unknown"}
                  </li>
                  <li>
                    <strong>Show Type: </strong> {type ? type : "unknown"}
                  </li>
                  <li>
                    <strong>Genres: </strong>
                    {genres &&
                      genres.map((genre, index) => {
                        if (index === genres.length - 1) {
                          return <span key={index}>{genre}</span>;
                        } else {
                          return <span key={index}>{genre + ", "}</span>;
                        }
                      })}
                  </li>
                  <li>
                    <strong>Episodes Number: </strong> {episodes.length} Episode
                  </li>
                  <li>
                    <strong>Created by: </strong>
                    {crew && <Creators />}
                  </li>
                  <li>
                    <strong>Official site: </strong>
                    {officialSite ? (
                      <a href={officialSite} target="_blank" rel="noreferrer">
                        {officialSite}
                      </a>
                    ) : (
                      "No official site"
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {cast.length !== 0 && (
            <div className="show-cast">
              <h3>Cast</h3>
              <hr />
              <div className="d-flex justify-content-between flex-wrap">
                {cast &&
                  cast.map((person) => {
                    return (
                      <div className="person d-flex" key={person.id}>
                        <img
                          alt={person.person.name}
                          src={
                            person.person.image
                              ? person.person.image.medium
                              : "https://plchldr.co/i/210x295"
                          }
                        />
                        <div>
                          <h5>{person.person.name} </h5>
                          <h6 className="text-success">
                            as {person.character.name}
                          </h6>
                          <span>
                            <strong>Country: </strong>{" "}
                            {person.person.country
                              ? person.person.country.name
                              : "Unknown"}{" "}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowDetails;
