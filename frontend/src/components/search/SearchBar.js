import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import axios from "axios";

const SearchBar = () => {
  const Navigate = useNavigate();
  const [service, setService] = useState([]);
  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };
  const searchHanler = async (e) => {
    let key = e.target.value;
    if (key) {
      let resultat = await fetch(
        `http://localhost:5000/api/Service/getKey/${key}`
      );
      resultat = await resultat.json();
      console.log(resultat);
      if (resultat) {
        setService(resultat);
      }
    } else {
    }
  };

  return (
    <Fragment>
      <input
        className="form-control form-control-sm mr-3 w-75"
        type="text"
        name="Search"
        placeholder="Search"
        aria-label="Search"
        onChange={searchHanler}
      />
      <span className="searchButton" />
    </Fragment>
  );
};

export default SearchBar;
