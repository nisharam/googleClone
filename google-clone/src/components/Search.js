import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    // this helps not to refresh the page.
    // also binding the variable input to have the value;
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search_buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined"> I'm feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
