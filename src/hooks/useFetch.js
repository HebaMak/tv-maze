import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("couldn't fetch data");
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setData(data);
          setError(null);
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
