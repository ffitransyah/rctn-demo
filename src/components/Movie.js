import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=5b45fb41&i=${id}`)
      .then((response) => response.json())
      .then((movie) => setMovie(movie))
  })

  return (
    <div className="row">
      <div className="col-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h3 className="card-title">{ movie.Title }</h3>
                  <p className="card-text">
                    <small className="text-muted">{ movie.Year }, { movie.Genre }, { movie.Rated }</small>
                  </p>
                  <p className="card-text">{ movie.Plot }</p>
                  <p className="card-text"><b>Actors</b><br />{ movie.Actors }</p>
                  <p className="card-text"><b>Director</b><br />{ movie.Director }</p>
                  <p className="card-text"><b>Writer</b><br />{ movie.Writer }</p>
                  <p className="card-text"><b>Awards</b><br />{ movie.Award }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Movie