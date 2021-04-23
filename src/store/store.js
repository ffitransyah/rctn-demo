import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  movies: [1, 2]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIATE_MOVIES":
      return { ...state, movies: action.movies }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store