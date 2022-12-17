import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const getLinkClass = (props) => {
    if (props.isActive) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };
  return (
    // <>
    //   {/* <NavLink to="/">Home</NavLink> use a only to navigate to an external page - */}
    //   <NavLink to="/">Home</NavLink>
    //   <NavLink to="/about">About</NavLink>
    //   <NavLink to="/login">Login</NavLink>
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
              className={(props) => getLinkClass(props)}
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink className={(props) => getLinkClass(props)} to="/about">
              About
            </NavLink>
            <NavLink className={(props) => getLinkClass(props)} to="/login">
              Login
            </NavLink>
            {/* <NavLink className="nav-link disabled">Disabled</NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
