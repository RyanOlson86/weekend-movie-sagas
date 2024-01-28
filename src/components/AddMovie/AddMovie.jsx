import React, { useState } from "react";
import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddMovie.css";

const genres = [
  {
    id: 1,
    name: "Adventure",
  },
  {
    id: 2,
    name: "Animated",
  },
  {
    id: 3,
    name: "Biographical",
  },
  {
    id: 4,
    name: "Comedy",
  },
  {
    id: 5,
    name: "Disaster",
  },
  {
    id: 6,
    name: "Drama",
  },
  {
    id: 7,
    name: "Epic",
  },
  {
    id: 8,
    name: "Fantasy",
  },
  {
    id: 9,
    name: "Musical",
  },
  {
    id: 10,
    name: "Romantic",
  },
  {
    id: 11,
    name: "Science Fiction",
  },
  {
    id: 12,
    name: "Space-Opera",
  },
  {
    id: 13,
    name: "Superhero",
  },
];

const AddMovie = () => {
  const [genreId, setGenreId] = useState("");
  const [imgInput, setImg] = useState("");
  const [titleInput, setTitle] = useState("");
  const [descInput, setDesc] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

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
