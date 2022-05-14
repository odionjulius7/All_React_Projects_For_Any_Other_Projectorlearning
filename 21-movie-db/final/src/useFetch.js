import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

// useFetch hook accept a query paramter(i.e our search term) from the context api
// we passed the id we want to search for, to the useFetch hook to search the url endpoint with the id
const useFetch = (urlParams) => {
  // we used the custom hook to get movies based on items searched for
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  // the fetchMovie func accept a url endpoint and the query(search term from the form input)
  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data); // if we get query(input) data the data.search is passed
        // else the id that we searched for, pass it object to data

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // the fetchMovie func accept a url endpoint and the query(search term from the form input)
    // to fetch the the movies
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { isLoading, error, data }; // and return the values to the context API that needs them
};

export default useFetch;
