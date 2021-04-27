import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { initiateMovies } from './store/actions'
import Header from "./components/Header"
import Heroes from "./components/Heroes"
import Movies from "./components/Movies"
import Movie from "./components/Movie"
import Favorites from "./components/Favorites"
import Footer from "./components/Footer"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initiateMovies())
  })

  return (
    <Router>
      <div className="container">
        <Header />

        <main className="flex-shrink-0">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/favorites">
              <Favorites />
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
