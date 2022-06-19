import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const Navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      Navigate(`/${keyword}`);
    } else {
      Navigate("/");
    }
  };

  return (
    <Fragment>
      <form
        className="form-inline active-cyan-4"
        onSubmit={searchSubmitHandler}
      >
        <input
          className="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span className="searchButton" />
        <SearchIcon />
     
      </form>
    </Fragment>
  );
};

export default SearchBar;
