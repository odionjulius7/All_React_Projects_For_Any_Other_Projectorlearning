import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      // when fetching news[hits] set loading to true in reducer
      return { ...state, isLoading: true };
    case SET_STORIES:
      // values gotten frm making api call are passed as payload for the updating of state when the action type of set_store is carried out
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        // pass d value gotten to the payload for updating the state in reducer
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      // the payload value is then passed to d state(query)
      return { ...state, query: action.payload, page: 0 };
    case HANDLE_PAGE:
      // if the value of payload is 'inc' increase page value
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          // but once the value of page becomes higher than the total number of pages available nextPage becomes 0
          // another but is the last page value is 49 if you start from 0 as d API gave us then nbPages that is 50
          // should be minus 1 from it to get the last page value
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      // if the value of payload is 'dec' decrease page value
      if (action.payload === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          // same here the value of page should return as 49 when the prevPage value gets less than 0
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
