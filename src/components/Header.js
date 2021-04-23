import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">Harry Potter</span>
        </Link>
    
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="nav-link active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/favorites" className="nav-link" activeClassName="nav-link active">Favorites</NavLink>
          </li>
        </ul>
      </header>
    </Router>
  )
}

export default Header