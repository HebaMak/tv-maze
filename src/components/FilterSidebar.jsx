import { useContext } from "react";
import { context } from "../hooks/context";

const FilterSidebar = () => {
  const { shows } = useContext(context);

  const status = [...new Set(shows && shows.map((show) => show.status))];
  const types = [...new Set(shows && shows.map((show) => show.type))];
  const languages = [...new Set(shows && shows.map((show) => show.language))];
  const runtimes = [
    ...new Set(
      shows && shows.map((show) => show.runtime).filter((show) => show !== null)
    ),
  ];

  const networks =
    shows && shows.map((show) => show.network).filter((show) => show !== null);

  const networksNames = [
    ...new Set(networks && networks.map((network) => network.name)),
  ];

  const countries = [
    ...new Set(networks && networks.map((network) => network.country.name)),
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

  const ratings = [
    ...new Set(
      shows &&
        shows.map((show) => show.rating.average).filter((rate) => rate !== null)
    ),
  ];

  //get genres
  const getGenres = () => {
    const allGenres = [];
    [...new Set(shows && shows.map((show) => show.genres))].map((x) =>
      x.forEach((y) => allGenres.push(y))
    );
    const result = [...new Set(allGenres)];
    return result;
  };

  // create options fun
  const createOptions = (iterator, text) => {
    return (
      iterator &&
      iterator.map((value, index) => (
        <option value={value} key={index}>
          {`${value}   ${text ? text : ""}`}
        </option>
      ))
    );
  };

  return (
    <>
      <h1>Filters</h1>
      <form>
        <label>show status</label>
        <select onClick={(e) => console.log(e.target.value)}>
          <option value="all">all</option>
          {createOptions(status)}
        </select>

        <label>show type</label>
        <select>
          <option value="all">all</option>
          {createOptions(types)}
        </select>

        <label>genre</label>
        <select>
          <option value="all">all</option>
          {createOptions(getGenres())}
        </select>

        <label>language</label>
        <select>
          <option value="all">all</option>
          {createOptions(languages)}
        </select>

        <label>country</label>
        <select>
          <option value="all">all</option>
          {createOptions(countries)}
        </select>

        <label>network</label>
        <select>
          <option value="all">all</option>
          {createOptions(networksNames)}
        </select>

        <label>web channel</label>
        <select>
          <option value="all">all</option>
          {createOptions(webChannels)}
        </select>

        <label>runtime</label>
        <select>
          <option value="all">all</option>
          {createOptions(runtimes, "minutes")}
        </select>

        <label>rating</label>
        <select>
          <option value="all">all</option>
          <option value="2">+2</option>
          <option value="3">+3</option>
          <option value="4">+4</option>
          <option value="5">+5</option>
          <option value="6">+6</option>
          <option value="7">+7</option>
          <option value="8">+8</option>
          <option value="9">+9</option>
        </select>
      </form>
    </>
  );
};

export default FilterSidebar;
