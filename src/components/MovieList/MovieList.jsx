import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  // Fetch movies on load
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie}/>
        ))}
      </section>
    </main>
  );
}

export default MovieList;
