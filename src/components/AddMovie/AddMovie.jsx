import React, { useState } from "react";
import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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
  const [genreInput, setGenre] = useState("");
  const [titleInput, setTitle] = useState("");
  const [descInput, setDesc] = useState("");

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDesc(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        backgroundColor: "white",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Add a movie to the database: </Typography>
      <TextField id="outlined-basic" label="Movie Title" variant="outlined" value={titleInput} onChange={handleTitle} />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={genreInput} label="Age" onChange={handleGenre}>
          {genres.map(genre => (
            <MenuItem key={genre.id} value={genre.name}>{genre.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField id="outlined-basic" label="Description" variant="outlined" value={descInput} onChange={handleDescription} />
    </Box>
  );
};

export default AddMovie;
