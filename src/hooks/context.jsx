import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const {
    data: allShows,
    isErorr,
    isLoading,
  } = useFetch("https://api.tvmaze.com/shows");

  useEffect(() => {
    setShows(allShows);
  }, [allShows, shows]);

  const value = {
    shows,
    isErorr,
    isLoading,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
