import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <>
    //   {/* <a href="/">Home</NavLink> use a only to navigate to an external page - */}
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/login">Login</Link>
    // </>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          useContext
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/login"
            >
              Login
            </NavLink>
            {/* <NavLink className="nav-link disabled">Disabled</NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
