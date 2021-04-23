export const initiateMovies = () => {
  return (dispatch) => {
    fetch('http://www.omdbapi.com/?apikey=5b45fb41&s=harry%20potter&type=movie')
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: "INITIATE_MOVIES",
          movies: movies.Search.sort((a,b) => (a.Year > b.Year) ? 1 : -1)
        })
      })
  }
}