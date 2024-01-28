import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardContent, Typography } from "@mui/material";

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
      <Card sx={{margin: "10px", border: "5px solid black"}} >
        <CardContent
          sx={{
            width: "240px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom textAlign="center" sx={{maxHeight: "32px", fontSize: "16px"}}>
            {movie.title}
          </Typography>
          <img id={movie.id} src={movie.poster} alt={movie.title} onClick={handleClick} data-testid="toDetails" style={{maxWidth: "185px"}}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieItem;
