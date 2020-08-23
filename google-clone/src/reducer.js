export const initialState = {
  term: "",
}; // take the input from inputbox for which to search.

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM", // takes the input field and searches the data
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
export default reducer;
