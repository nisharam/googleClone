import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { useStateValue} from "../StateProvider";
import  { actionTypes} from "../reducer";



function Search({hideButtons = false}) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const[{}, dispatch] = useStateValue();
  const search = (e) => {
    e.preventDefault();
    // this helps not to refresh the page.
    // also binding the variable input to have the value;
    // do with something with input.... and show result;

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input

    })
    history.push('/search');
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
          <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm feeling Lucky</Button>
        </div>
      ): <div className="search_buttonsHidden">
      <Button type="submit" onClick={search} variant="outlined">
        Google Search
      </Button>
      <Button variant="outlined"> I'm feeling Lucky</Button>
    </div>}
      
    </form>
  );
}

export default Search;
