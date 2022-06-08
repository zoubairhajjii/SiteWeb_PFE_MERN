import React, { useState, useEffect, Fragment } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { setTheme } from "../../utils/theme/Theme";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../search/SearchBar";

export default function Header() {
  const dispatch = useDispatch();
  const [hamburger, setHamburger] = useState(true);
  const showSidebar = () => setHamburger(!hamburger);
  const { user } = useSelector((state) => state.authReducer);


  return (
    <Fragment>
      <div className="header d__flex">
        <Link to="/homee">
          <div className="header__logo d__flex">JobFinder</div>
        </Link>
        <div
          className={
            hamburger
              ? "nav__list d__flex"
              : " nav__list d__flex hamburger__open"
          }
        >
          <Link to="/homee">
            <div className="nav__option">Home</div>
          </Link>

          <Link to="/about">
            <div className="nav__option">AboutUs</div>
          </Link>

          <Link to="">
            <div className="nav__option">Logout</div>
          </Link>

          <>
            <Link to="/signup">
              <div className="nav__option">Signup</div>
            </Link>
            <Link to="/login">
              <div className="nav__option">Login</div>
            </Link>
          </>

          {/* on mobile view */}
          <Link to="/account">
            <div className="header__option userAccount for__mobile">
              {user && user.avatar && user.avatar.url ? (
                <img
                  className="headerProfile"
                  src={user.avatar.url}
                  alt="profile"
                />
              ) : (
                <AccountCircleIcon />
              )}
            </div>
          </Link>
          <Link to="/cart">
            <div className="header__option nav__option for__mobile">
              <ShoppingCartIcon className="shoppingCartIcon" />
              <span className="cart__count"></span>
            </div>
          </Link>
        </div>

        {/* on desktop view */}
        <div className="header__Icons d__flex">
          <div className="productSearch">
            <SearchIcon />
          </div>
          <Link to="/account">
            <div className="header__option userAccount not__for__mobile"></div>
          </Link>
         
          <div className="header__option hamburger" onClick={showSidebar}>
            <MenuIcon />
          </div>
        </div>
        <SearchBar />
      </div>
    </Fragment>
  );
}
