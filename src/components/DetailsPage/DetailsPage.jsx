import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardContent, Button, CardActions, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Margin } from "@mui/icons-material";

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

  const myStyle = {
    backgroundColor: "white",
    borderRadius: "5px",
  };

  return (
    <div data-testid="movieDetails">
      {/* <img src={movieDetails?.poster} />
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
      </button> */}
      <Card inputProps={{"data-testid":"movieDetails"}} >
        <CardContent
          sx={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" gutterBottom textAlign="center">
            {movieDetails?.title}
          </Typography>

          <img src={movieDetails?.poster} />

          <Accordion sx={{margin: "10px"}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={myStyle}>
              Genres
            </AccordionSummary>
            <AccordionDetails>
              {genres.map((genre, i) => (
                <li key={i}>{genre.name}</li>
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={myStyle}>
              Description
            </AccordionSummary>
            <AccordionDetails>{movieDetails?.description}</AccordionDetails>
          </Accordion>

          {/* <Box component="form">
            <TextField
              label={title}
              variant="outlined"
              type={inputType}
              size="large"
              inputProps={{"data-testid":"input"}}
              onChange={(event) => setFormInput(event.target.value)}
            ></TextField>
          </Box> */}
          <CardActions>
            <Button size="large" variant="contained" onClick={handleClick} data-testid="toList" sx={{margin: "10px"}}>
              HOME
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetailsPage;
