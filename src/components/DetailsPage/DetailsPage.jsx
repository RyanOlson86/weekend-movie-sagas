import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function DetailsPage() {
  const history = useHistory();
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);

  // Filter store.movies to find movie details that match movieID of poster that was clicked
  const movieArray = movies.filter((movie) => movie.id == genres[0]?.movieid);
  // get object from filtered array
  const movieDetails = movieArray[0];

  // On click, change page to home page
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div data-testid="movieDetails">
      <h1>DetailsPage</h1>
      <img src={movieDetails?.poster} />
      <h2>{movieDetails?.title}</h2>
      <div>
        Genres:
        {genres.map((genre, i) => (
          <div key={i}>{genre.name}</div>
        ))}
      </div>
      <br></br>

      <div>{movieDetails?.description}</div>

      <button data-testid="toList" onClick={handleClick}>
        HOME
      </button>
    </div>
  );
}

export default DetailsPage;
