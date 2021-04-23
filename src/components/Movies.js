import React from 'react'
import { useSelector } from 'react-redux'

const Movies = () => {
  const { movies } = useSelector((state) => state)

  return (
    <div className="row">
    {
      movies.map((movie, index) => (
        <div className="col-6" key={index}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3">
                <img src={movie.Poster} alt="" className="img-fluid" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">{ movie.Title }</h5>
                  <p className="card-text"><small className="text-muted">{ movie.Year }</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Movies