import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initiateMovies } from './store/actions'
// import Header from "./components/Header"
import Heroes from "./components/Heroes"
import Movies from "./components/Movies"
import Footer from "./components/Footer"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initiateMovies())
  })

  return (
    <Router>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">Harry Potter</span>
          </a>
      
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link" activeClassName="active">Favorites</NavLink>
            </li>
          </ul>
        </header>

        <main className="flex-shrink-0">
          <Switch>
            <Route path="/favorites">
              <h1>Test dulu</h1>
            </Route>
            <Route path="/">
              <Heroes />
              <Movies />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
