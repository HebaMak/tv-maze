import { useContext } from "react";
import { context } from "../hooks/context";

const FilterSidebar = () => {
  const {
    types,
    status,
    runTimes,
    countries,
    languages,
    getGenres,
    webChannels,
    handleFilter,
    networksNames,
    createOptions,
  } = useContext(context);

  return (
    <>
      <h3>Filters</h3>
      <form>
        <label>show status</label>
        <select onChange={handleFilter}>
          {createOptions(status)}
          <option value="all">all</option>
        </select>

        <label>show type</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(types)}
        </select>

        <label>genre</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(getGenres())}
        </select>

        <label>language</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(languages)}
        </select>

        <label>country</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(countries)}
        </select>

        <label>network</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(networksNames)}
        </select>

        <label>web channel</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(webChannels)}
        </select>

        <label>runtime</label>
        <select onChange={handleFilter}>
          <option value="all">all</option>
          {createOptions(runTimes, "minutes")}
        </select>

        <label>rating</label>
        <select onChange={handleFilter}>
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
