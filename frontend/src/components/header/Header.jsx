import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { setTheme } from "../../utils/theme/Theme";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../search/SearchBar";
import {notifySuccess} from "../../utils/alerts/Alerts"
import logout from "../../redux/reducers/authReducer"



export default function Header() {
  const dispatch = useDispatch();
  const [hamburger, setHamburger] = useState(true);
  const showSidebar = () => setHamburger(!hamburger);
  const { auth,user } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logout());
    notifySuccess("logout successfully.");
  };
  return (
    <AppBar position="static">
      <div className="header d__flex">
        <Link to="/">
          <div className="header__logo d__flex">JobFinder</div>
        </Link>
        <div
          className={
            hamburger
              ? "nav__list d__flex"
              : " nav__list d__flex hamburger__open"
          }
        >
          <Link to="/">
            <div className="nav__option">Home</div>
          </Link>

          <Link to="/about">
            <div className="nav__option">AboutUs</div>
          </Link>

          {auth ? <>
                        <Link to=''>
                            <div className="nav__option" onClick={handleLogout}>Logout</div>
                        </Link>
                    </> :
                        <>
                            <Link to='/signup'>
                                <div className="nav__option">Signup</div>
                            </Link>
                            <Link to='/login'>
                                <div className="nav__option">Login</div>
                            </Link>
                        </>
                    }



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
    </AppBar>
  );
}
