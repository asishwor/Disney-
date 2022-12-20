import React from "react";
import {
  Container,
  HeaderStyle,
  Logo,
  Nav,
  NavMenu,
  UserImage,
} from "./Header.style";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Nav>
          <Logo src="./Images/logo.svg" />
          <NavMenu>
            <a href="/">
              <img src="./Images/home-icon.svg" alt="home__Logo" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src="Images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src="Images/watchlist-icon.svg" alt="search" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="Images/original-icon.svg" alt="search" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="Images/movie-icon.svg" alt="search" />
              <span>MOVIE</span>
            </a>
            <a href="/">
              <img src="Images/series-icon.svg" alt="search" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <AiOutlineUser
            style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
          />
        </Nav>
      </HeaderStyle>
    </>
  );
};

export default Header;
