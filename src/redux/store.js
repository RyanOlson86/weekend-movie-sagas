import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeLatest('FETCH_DETAILS', fetchDetails);
  yield takeLatest('ADD_MOVIE', addMovie);
  yield takeLatest('FETCH_ALL_GENRES', fetchAllGenres)
}

function* fetchAllGenres(action) {
  try {
    const genreResponse = yield axios.get(`/api/genres/all`)
    yield put({type: 'SET_ALL_GENRES', payload: genreResponse.data})
  } catch (error) {
    console.log('fetchAllGenres error:', error);
  }
}

function* fetchDetails(action) {
  try {
    const genreResponse = yield axios.get(`/api/genres/details/${action.payload}`)
    yield put({type: 'SET_GENRES', payload: genreResponse.data})
  } catch (error) {
    console.log('fetchDetails error:', error);
  }
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* addMovie(action) {
  try {
    yield axios.post('api/movies', action.payload)
    yield put({type: 'FETCH_MOVIES'})
  } catch (error) {
    console.log('addMovie error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store ALL movie genres
const allGenres = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    allGenres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
