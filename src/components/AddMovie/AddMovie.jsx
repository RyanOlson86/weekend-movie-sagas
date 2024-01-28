import React, { useState } from "react";
import { Box, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useDispatch } from "react-redux";

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
  const [genreId, setGenreId] = useState('')
  const [imgInput, setImg] = useState("");
  const [titleInput, setTitle] = useState("");
  const [descInput, setDesc] = useState("");

  const dispatch = useDispatch()

  const handleGenre = (event) => {
    setGenreId(event.target.value)
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
    dispatch({type: 'ADD_MOVIE', payload: {
        title: titleInput,
        poster: imgInput,
        description: descInput,
        genre_id: genreId
    }})
  }

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
      <Typography variant="h5" >Add a movie to the database: </Typography>
      <TextField id="outlined-basic" label="Movie Title" variant="outlined" value={titleInput} onChange={handleTitle} />
      <TextField id="outlined-basic" label="Image URL" variant="outlined" value={imgInput} onChange={handleImg} />

      <FormControl fullWidth>
        <InputLabel >Genre</InputLabel>
        <Select value={genreId} label="Genre" onChange={handleGenre}>
          {genres.map(genre => (
            <MenuItem key={genre.id} value={genre.id} >{genre.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField id="outlined-basic" label="Description" variant="outlined" value={descInput} onChange={handleDescription} />
      <Button variant="contained" color="secondary">CANCEL</Button>
        <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
    </Box>
  );
};

export default AddMovie;
