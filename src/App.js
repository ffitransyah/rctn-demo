import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initiateMovies } from './store/actions'
// import Header from "./components/Header"
import Heroes from "./components/Heroes"
import Movies from "./components/Movies"
import Movie from "./components/Movie"
import Footer from "./components/Footer"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initiateMovies())
  })

  return (
    <Router>
      <div className="container">
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

        <main className="flex-shrink-0">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/home">
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
