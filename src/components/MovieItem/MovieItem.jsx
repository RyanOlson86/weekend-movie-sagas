import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Function to handle click, send movie ID to a reducer to retrieve genre and store
  // After dispatch, load details page with useHistory
  const handleClick = (event) => {
    dispatch({ type: "FETCH_DETAILS", payload: event.target.id });
    history.push("/details");
  };

  return (
    <div data-testid="movieItem">
      <h3>{movie.title}</h3>
      <img id={movie.id} src={movie.poster} alt={movie.title} onClick={handleClick} data-testid="toDetails" />
    </div>
  );
}

export default MovieItem;
