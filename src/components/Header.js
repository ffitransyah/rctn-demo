import React from 'react'
import {
  NavLink
} from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">Harry Potter</span>
      </a>
  
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/favorites" className="nav-link" activeClassName="active">Favorites</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header