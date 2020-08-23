import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        {/* it will contain the home  */}
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* it creats a link to particular page. */}
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        {/* it will contains the google search bar */}

        <img src="../../../googleLogo.png" />
        <div className="home_inputContainer">
          {/* search component will be used here. */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
