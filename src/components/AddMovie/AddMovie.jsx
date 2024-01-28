import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddMovie.css";

const AddMovie = () => {
  // Local States for inputs
  const [genreId, setGenreId] = useState("");
  const [imgInput, setImg] = useState("");
  const [titleInput, setTitle] = useState("");
  const [descInput, setDesc] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_GENRES' });
  }, []);

  //Global genres store
  const genres = useSelector(store => store.allGenres)

  
  // Functions for handling change and setting local state
  const handleGenre = (event) => {
    setGenreId(event.target.value);
  };

  const handleImg = (event) => {
    setImg(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDesc(event.target.value);
  };

  // Function to handle submit and dispatch ADD_MOVIE
  const handleSubmit = () => {
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        title: titleInput,
        poster: imgInput,
        description: descInput,
        genre_id: genreId,
      },
    });
  };

  // Function to cancel input and send back to home
  const handleCancel = () => {
    history.push("/");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2 },
        backgroundColor: "white",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4">Add a movie to the database: </Typography>
      <Box className="inputs">
        <TextField id="movie-title" label="Movie Title" variant="outlined" value={titleInput} onChange={handleTitle} />
        <TextField id="url-path" label="Image URL" variant="outlined" value={imgInput} onChange={handleImg} />
      </Box>

      <Box sx={{ width: "90%" }}>
        <FormControl fullWidth>
          <InputLabel>Genre</InputLabel>
          <Select value={genreId} label="Genre" onChange={handleGenre}>
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: "90%" }}>
        <TextField
          id="desc-input"
          label="Description"
          variant="outlined"
          value={descInput}
          onChange={handleDescription}
          fullWidth
          multiline
          rows={6}
        />
      </Box>

      <Box>
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          CANCEL
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default AddMovie;
