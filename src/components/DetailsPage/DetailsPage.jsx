import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Card inputProps={{ "data-testid": "movieDetails" }} variant="outlined" sx={{margin: "30px"}}>
        <CardContent
          sx={{
            width: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            paddingTop: "10px",
            paddingBottom: "10px"
          }}
        >
          <Box sx={{width: "400px", textAlign: "center"}}>
            <Typography variant="h4" gutterBottom  sx={{width: "400px"}}>
              {movieDetails?.title}
            </Typography>

            <img src={movieDetails?.poster} style={{ width: "350px"}} />
          </Box>

          <Divider orientation="vertical" variant="fullWidth" flexItem />

          <Box>
            <Accordion sx={{ margin: "10px"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={myStyle}>
                Genres
              </AccordionSummary>
              <AccordionDetails>
                {genres.map((genre, i) => (
                  <li key={i}>{genre.name}</li>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ margin: "10px" }}>
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
              <Button size="large" variant="contained" onClick={handleClick} data-testid="toList" sx={{ margin: "10px" }}>
                HOME
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetailsPage;
