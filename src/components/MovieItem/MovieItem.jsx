import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieItem({movie}) {
  const dispatch = useDispatch();

  return (
    <div data-testid='movieItem'>
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title}/>
    </div>
          
  );
}

export default MovieItem;