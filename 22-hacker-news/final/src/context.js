import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // passing initial state to the useReducer/reducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING }); // when fetching news[hits] set loading to true in reducer
    try {
      const response = await fetch(url);
      const data = await response.json();
      // when we fetch data from APIs when making use of useReducer/redux
      // we pass the value to the dispatch to carry out the action of the reducer
      // that is the action type will be activated and carried out as specified in the reducer
      dispatch({
        type: SET_STORIES, // we set_store in reducer
        payload: { hits: data.hits, nbPages: data.nbPages },
        // pass d value gotten to the payload for updating the state in reducer
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  // NOTICE: the query parameter is d typed value frm the input box and given to the payload
  // the payload(in reducer) then pass it to or state(query)
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  // passing the value we got from the btn component to the payload('dec' or 'inc')
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  // we want to get the hits(news/articles) not just when the app loads(first render) but when the value in the query changes
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]); // and also we fetch new set of item from API endpoint we the value of page changes

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
