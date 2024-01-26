import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieItem({movie}) {
  const dispatch = useDispatch();

  // Function to handle click, send movie ID to a reducer to retrieve details and store
    // After dispatch, load details page with useHistory
const handleClick = (event) => {
    dispatch({type: 'FETCH_DETAILS', payload: event.target.id})
}

  return (
    <div data-testid='movieItem'>
        <h3>{movie.title}</h3>
        <img id={movie.id} src={movie.poster} alt={movie.title} onClick={handleClick}/>
    </div>
          
  );
}

export default MovieItem;