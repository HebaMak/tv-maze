import { useContext } from "react";
import { context } from "../hooks/context";

const SearchField = () => {
  const { searchValue, handleSearch, handleChange } = useContext(context);

  return (
    <>
      <form className="searchField-form d-flex" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={handleChange}
          placeholder="search shows"
        />
        <i className="fa fa-search search-btn" onClick={handleSearch}></i>
      </form>
    </>
  );
};

export default SearchField;
