import React from "react";
import "./Header.css";

const Header = props => {
  const pathName = window.location.pathname;
  console.log(pathName);
  console.log(pathName === "/");
  return (
    <>
      <div className="overlay-header">
        <span className="close-overlay">
          <i className="fal fa-times"></i>
        </span>
      </div>
      <div className="header">
        <div className="container">
          <div className="header-menu">
            <div className="header-menu-logo">
              <a className="header-menu-logo-link" href="#">
                <img src="/img/hunglogo.jpg"></img>
              </a>
            </div>
            <div className="accordion-menu">
              <div className="header-menu-button">
                <i className="fas fa-bars"></i>
              </div>
              <ul className="header-menu-list">
                <li className="list-item">
                  <a
                    className={`list-item-link ${pathName === "/" ? "active1" : ""}`} href="/">
                    Home
                  </a>
                </li>
                <li className="list-item">
                  <a className="list-item-link" href="#">
                    Games
                  </a>
                </li>
                <li className="list-item">
                  <a className="list-item-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="list-item">
                  <a className="list-item-link" href="#">
                    About
                  </a>
                </li>
                <li className="list-item">
                  <a className="list-item-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="list-item">
                  <a className="list-item-link" href="#">
                    Login
                  </a>
                </li>
                <li className="list-item menu-search">
                  <a className="list-item-link icon-search" href="#">
                    <i className="fas fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search__layout">
          <div className="search-body">
            <div className="search-close ">
              <span>
                <i className="fas fa-times"></i>
              </span>
            </div>
            <form>
              <p className="text-uppercase ">
                start typing and press Enter to search
              </p>
              <div className="search-input">
                <input type="text" />
                <i className="fas fa-search"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
