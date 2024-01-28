const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // GET array of objects with movie ID and and genre name where ID matches req.params
  const queryText = `SELECT movies_genres.movie_id AS movieid, name FROM movies_genres
  JOIN genres ON genres.id = movies_genres.genre_id
  WHERE movie_id = $1;`;
  const queryParams = [req.params.id];

  // Send query to database and return results to client
  pool.query(queryText, queryParams)
  .then((results)=>{
    res.send(results.rows)
  })
  .catch(error => {
    console.log('Error in /api/genres/ GET', error)
  })
});

// router.get('/all', (req, res) => {
//   // GET array of objects with genre and genreId
//   const queryText = `SELECT * FROM genres;`;

//   pool.query(queryText)
//   .then((results)=>{
//     res.send(results.rows)
//   })
//   .catch(error => {
//     console.log('Error in /api/genres/ GET', error)
//   })
// });

module.exports = router;