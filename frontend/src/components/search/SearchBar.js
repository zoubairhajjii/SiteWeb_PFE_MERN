import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import axios from "axios";

const SearchBar = () => {
  const Navigate = useNavigate();
  const [filter, setFilter] = useState("");

	const filterHandler = (e) => {
		const name = e.target.value;
    //console.log(name,"name")
		setFilter(name);
	//	filteration(name);
	};
  
  return (
    <Fragment>
      <input
        className="form-control form-control-sm mr-3 w-75"
        type="text"
        name="Search"
        placeholder="filter by name"
				value={filter}
				onChange={filterHandler}
			/>
      
      <span className="searchButton" />
    </Fragment>
  );
};

export default SearchBar;
