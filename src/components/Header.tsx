import React, { useState } from 'react'
import { Link } from '@reach/router'

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setActive(!active)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className="navbar-start">
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
        </div>
      </div>
    </nav>
  )
}
export default Header
