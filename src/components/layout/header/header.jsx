import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "../../user";

const mainHeader = {
  backgroundColor: "#4267b2",
  height: "43px",
};

const anchorColor = {
  color: "#ffffff",
};

const cssCustom = {
  color: "#ffffff",
  fontWeight: "normal",
  fontSize: "12px",
};
const Header = ({ user, img, alt }) => {
  const view = true;
  console.log(cssCustom);
  return (
    <div className="container-fluid" style={mainHeader}>
      <div className="container" style={{ overflow: "hidden", height: "100%" }}>
        <nav className="navbar navbar-expand-lg" style={{ padding: "0" }}>
          <Link className="navbar-brand" to="/" style={anchorColor}>
            Facebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "flex-end" }}>
            <ul className="navbar-nav">
              <li className="nav-item" id="user-item">
                <User view={view} user={user} cssCustom={cssCustom} />
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={anchorColor}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/find-friends"
                  className="nav-link"
                  style={anchorColor}>
                  Find Friends
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
