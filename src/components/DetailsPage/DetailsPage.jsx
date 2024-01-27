import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function DetailsPage() {
    const history = useHistory()
  const movies = useSelector(store => store.movies);
  const genres = useSelector(store => store.genres);
  const movieArray = movies.filter(movie => movie.id == genres[0]?.movieid)
  const movieDetails = movieArray[0]


//   useEffect(() => {
//     dispatch({ type: 'FETCH_MOVIES' });
//   }, []);

const handleClick = () => {
    history.push('/')
}

  return (
    <div data-testid="movieDetails">
      <h1>DetailsPage</h1>
      <img src={movieDetails?.poster} />
      <h2>{movieDetails?.title}</h2>
      <div>Genres:
      {genres.map((genre, i) => (
        <div key={i}>{genre.name}</div>
      ))}
      </div>
      <br></br>
      
      <div>{movieDetails?.description}</div>
      
      <button data-testid="toList" onClick={handleClick}>HOME</button>
      
    </div>
  );
}

export default DetailsPage;
