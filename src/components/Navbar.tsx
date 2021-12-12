import React from 'react'
import { Link } from '@reach/router'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link> */}
      <Link to="/posts">Posts</Link>
      <Link to="/events">Events</Link>
    </nav>
  )
}
export default Navbar;
