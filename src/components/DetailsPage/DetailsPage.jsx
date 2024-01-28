import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
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
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory();
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);
  
  // Update store on refresh
  useEffect(()=>{
    dispatch({type: 'FETCH_MOVIES'})
    dispatch({ type: "FETCH_DETAILS", payload: id })
  }, [])

  // Filter store.movies to find movie details that match movieID of poster that was clicked
  const movieArray = movies.filter((movie) => movie.id == id);

  // get object from filtered array
  const movieDetails = movieArray[0];

  // On click, change page to home page
  const handleClick = () => {
    history.push("/");
  };

  const handleDelete = (event) => {
    dispatch({type: 'DELETE_MOVIE', payload: id});
    history.push("/");
  }

  const myStyle = {
    backgroundColor: "#afd6c4",
    borderRadius: "5px",
  };

  return (
    <div data-testid="movieDetails">
      <Card
        // inputprops={{ "data-testid": "movieDetails" }}
        variant="outlined"
        sx={{ margin: "30px", marginBottom: "120px", border: "5px solid black" }}
      >
        <CardContent
          sx={{
            width: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Box sx={{ width: "400px", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ width: "400px" }}>
              {movieDetails?.title}
            </Typography>

            <img src={movieDetails?.poster} style={{ width: "320px" }} />
          </Box>

          <Divider orientation="vertical" variant="fullHeight" flexItem />

          <Box>
            <Accordion sx={{ margin: "10px" }}>
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

            <CardActions>
              <Button size="large" variant="contained" onClick={handleClick} data-testid="toList" sx={{ margin: "10px" }}>
                HOME
              </Button>
              <Button size="large" variant="contained" onClick={handleDelete} color="secondary" sx={{ margin: "10px" }}>
                DELETE
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetailsPage;
