import React from "react";
import { Link } from "@reach/router";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
              Home
            </Link>
            {/* <Link to="/about">About</Link> */}
            <Link to="/posts" className="navbar-item">
              Posts
            </Link>
            <Link to="/events" className="navbar-item">
              Events
            </Link>
            <Link to="/github" className="navbar-item">
              GitHub
            </Link>
        </div>
        {/* <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/posts" className="navbar-item">
              Posts
            </Link>
            <Link to="/events" className="navbar-item">
              Events
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;
