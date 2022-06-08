import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import MetaData from "../../utils/title/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import SortIcon from "@mui/icons-material/Sort";
import { Slider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import NewServiceAdd from "../service/pages/admin/NewServiceAdd";

const categories = ["PLOMBIER", "ELECTRICINE", "NAJAR"];
const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [open, setOpen] = useState(false);

  const setActivePageNO = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {}, [dispatch, currentPage, price, category, ratings]);

  return (
    <Fragment>
      <Fragment>
        <NewServiceAdd/>
        <MetaData title="home page" />
        <div className="home">
          <div className="dishes">
            <div className="sortProducts">
              <span className="sortBtn" onClick={() => setOpen(!open)}>
                <SortIcon />
                SortBy
              </span>
              <div
                className={
                  open ? "selectOptionsBox active" : "selectOptionsBox"
                }
              >
                <div className="sortByPrice">
                  <span className="priceBtn">Price</span>
                  <div>
                    <Slider
                      value={price}
                      onChange={(event, newPrice, selectOptionsBox) => {
                        setPrice(newPrice);
                      }}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      min={0}
                      max={25}
                    />
                  </div>
                </div>

                <div className="sortByCate">
                  <span className="cateBtn">Category</span>
                  <div className="">
                    <ul className="categoryBox">
                      {categories.map((category) => (
                        <li
                          className="category-link"
                          key={category}
                          onClick={() => setCategory(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sortByRating">
                  <span className="RatingBtn">Rating</span>
                  <div className="">
                    <fieldset>
                      <Slider
                        value={ratings}
                        onChange={(e, newRating) => {
                          setRatings(newRating);
                        }}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={5}
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Fragment>
    
    </Fragment>
  );
};

export default Home;
